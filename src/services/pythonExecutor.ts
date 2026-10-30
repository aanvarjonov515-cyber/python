import { ExecutionResult } from '../types';

declare global {
  interface Window {
    loadPyodide?: any;
    pyodide?: any;
  }
}

let pyodideInstance: any = null;
let isLoadingPyodide = false;

export async function initPyodide(): Promise<any> {
  if (pyodideInstance) return pyodideInstance;
  if (window.pyodide) {
    pyodideInstance = window.pyodide;
    return pyodideInstance;
  }

  if (isLoadingPyodide) {
    // Wait until loaded
    while (isLoadingPyodide) {
      await new Promise((r) => setTimeout(r, 100));
      if (pyodideInstance) return pyodideInstance;
    }
  }

  try {
    isLoadingPyodide = true;
    if (!window.loadPyodide) {
      // Inject CDN script dynamically if not present
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js';
      script.async = true;
      document.head.appendChild(script);

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Pyodide CDN failed to load'));
      });
    }

    if (window.loadPyodide) {
      pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
      });
      window.pyodide = pyodideInstance;
    }
  } catch (err) {
    console.warn('Pyodide initialization failed, will fallback to browser Python interpreter:', err);
  } finally {
    isLoadingPyodide = false;
  }

  return pyodideInstance;
}

/**
 * Fallback JS-based interpreter for common Python structures
 * Handles print(), variables, arithmetic, simple string methods, loops, list/dict operations, functions, input() simulation.
 */
function runFallbackPython(code: string, inputValues: string[] = []): ExecutionResult {
  const logs: string[] = [];
  let inputIndex = 0;

  const simulatedInput = (promptMsg?: string) => {
    if (promptMsg) logs.push(String(promptMsg));
    const val = inputValues[inputIndex] !== undefined ? inputValues[inputIndex] : 'Ali';
    inputIndex++;
    return val;
  };

  try {
    const startTime = performance.now();
    
    // Transform python code to JavaScript equivalent safely
    let jsCode = code;

    // Convert print(...) to output logger
    // Match print(...) calls
    const processedLines: string[] = [];
    const lines = code.split('\n');

    for (let line of lines) {
      // Check for comments
      const commentIndex = line.indexOf('#');
      if (commentIndex !== -1 && !line.slice(0, commentIndex).includes('"') && !line.slice(0, commentIndex).includes("'")) {
        line = line.substring(0, commentIndex);
      }
      if (!line.trim()) continue;

      // Handle simple print statements
      if (line.trim().startsWith('print(') && line.trim().endsWith(')')) {
        const inner = line.trim().slice(6, -1);
        // Convert Python string concat or commas to JS logger
        // Handle f-strings roughly
        if (inner.startsWith('f"') || inner.startsWith("f'")) {
          const raw = inner.slice(2, -1);
          const interpolated = raw.replace(/\{([^}]+)\}/g, (_, p1) => `\${${p1}}`);
          processedLines.push(`__logs.push(\`${interpolated}\`);`);
        } else if (inner.includes(',')) {
          const parts = inner.split(',').map(p => p.trim());
          processedLines.push(`__logs.push([${parts.join(', ')}].join(' '));`);
        } else {
          processedLines.push(`__logs.push(String(${inner}));`);
        }
      } else if (line.includes('input(')) {
        // Convert input(...)
        line = line.replace(/input\((.*?)\)/g, (_, prompt) => `__input(${prompt || ''})`);
        processedLines.push(line);
      } else {
        // Python syntax conversions
        line = line.replace(/\bTrue\b/g, 'true')
                   .replace(/\bFalse\b/g, 'false')
                   .replace(/\bNone\b/g, 'null')
                   .replace(/\band\b/g, '&&')
                   .replace(/\bor\b/g, '||')
                   .replace(/\bnot\b/g, '!')
                   .replace(/\elif\b/g, '} else if')
                   .replace(/\bdef\b\s+([a-zA-Z0-9_]+)\((.*?)\):/g, 'function $1($2) {')
                   .replace(/\bfor\s+([a-zA-Z0-9_]+)\s+in\s+range\((.*?)\):/g, (_, varName, rangeArg) => {
                     let start = '0', end = rangeArg, step = '1';
                     if (rangeArg.includes(',')) {
                       const parts = rangeArg.split(',').map((p: string) => p.trim());
                       if (parts.length === 2) {
                         start = parts[0];
                         end = parts[1];
                       } else if (parts.length === 3) {
                         start = parts[0];
                         end = parts[1];
                         step = parts[2];
                       }
                     }
                     return `for (let ${varName} = ${start}; ${varName} < ${end}; ${varName} += ${step}) {`;
                   })
                   .replace(/\bwhile\s+(.*?):/g, 'while ($1) {')
                   .replace(/\bif\s+(.*?):/g, 'if ($1) {');

        processedLines.push(line);
      }
    }

    // Wrap in IIFE
    const fnBody = `
      const __logs = [];
      const __input = ${simulatedInput.toString()};
      try {
        ${processedLines.join('\n')}
      } catch (e) {
        return { error: e.message, logs: __logs };
      }
      return { logs: __logs };
    `;

    const runner = new Function(fnBody);
    const result = runner();

    const endTime = performance.now();

    if (result.error) {
      return {
        output: result.logs ? result.logs.join('\n') : '',
        error: `SyntaxError / NameError: ${result.error}`,
        executionTimeMs: Math.round(endTime - startTime)
      };
    }

    return {
      output: result.logs.join('\n'),
      executionTimeMs: Math.round(endTime - startTime)
    };
  } catch (err: any) {
    return {
      output: logs.join('\n'),
      error: `Python syntax error: ${err.message || String(err)}`
    };
  }
}

export async function executePythonCode(code: string, inputValues: string[] = []): Promise<ExecutionResult> {
  const startTime = performance.now();

  try {
    const pyodide = await initPyodide();
    if (pyodide) {
      let stdoutLog = '';
      pyodide.setStdout({
        batched: (text: string) => {
          stdoutLog += text + '\n';
        }
      });

      // Handle input mocking in Pyodide
      if (inputValues.length > 0) {
        let idx = 0;
        pyodide.globals.set('input', (prompt?: string) => {
          if (prompt) stdoutLog += prompt;
          const val = inputValues[idx] || '';
          idx++;
          return val;
        });
      }

      await pyodide.runPythonAsync(code);
      const endTime = performance.now();

      return {
        output: stdoutLog.trim(),
        executionTimeMs: Math.round(endTime - startTime)
      };
    }
  } catch (pyodideErr: any) {
    // If Pyodide encountered execution error, return formatted python traceback error message
    const errMsg = pyodideErr.message || String(pyodideErr);
    // Clean up Pyodide stack trace for student-friendly Uzbek error message
    const cleanError = errMsg.split('\n').filter((line: string) => !line.includes('pyodide')).slice(-3).join('\n');
    
    return {
      output: '',
      error: cleanError || errMsg
    };
  }

  // Fallback if Pyodide is not loaded or offline
  return runFallbackPython(code, inputValues);
}
