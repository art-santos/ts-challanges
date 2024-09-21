export function isBoolean(value: unknown): boolean {
    throw 'Not implemented!';
  }
  
  export function isNumber(value: unknown): boolean {
    throw 'Not implemented!';
  }
  
  export function isNull(value: unknown): boolean {
    throw 'Not implemented!';
  }
  
  export function isString(value: unknown): boolean {
    throw 'Not implemented!';
  }
  
  export function isSymbol(value: unknown): boolean {
    throw 'Not implemented!';
  }
  
  export function isUndefined(value: unknown): boolean {
    throw 'Not implemented!';
  }


  // Example usage of isBoolean
  console.log(isBoolean(true)); // Expected output: true
  console.log(isBoolean(false)); // Expected output: true
  console.log(isBoolean('not a boolean')); // Expected output: false

  // Example usage of isNumber
  console.log(isNumber(42)); // Expected output: true
  console.log(isNumber('42')); // Expected output: false

  // Example usage of isNull
  console.log(isNull(null)); // Expected output: true
  console.log(isNull(undefined)); // Expected output: false

  // Example usage of isString
  console.log(isString('hello')); // Expected output: true
  console.log(isString(123)); // Expected output: false

  // Example usage of isSymbol
  const sym = Symbol('a symbol');
  console.log(isSymbol(sym)); // Expected output: true
  console.log(isSymbol('not a symbol')); // Expected output: false

  // Example usage of isUndefined
  console.log(isUndefined(undefined)); // Expected output: true
  console.log(isUndefined(null)); // Expected output: false