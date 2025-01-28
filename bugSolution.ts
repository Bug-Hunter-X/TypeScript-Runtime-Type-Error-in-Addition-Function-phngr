function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers');
  }
  return a - b;
}

let result = add(5, 3);
console.log(result); // Output: 8

try {
  result = add(5, "hello");
  console.log(result);
} catch (error) {
  console.error(error.message); // Output: Error: Invalid input: Both arguments must be numbers
}

result = subtract(10, 5);
console.log(result); // Output: 5