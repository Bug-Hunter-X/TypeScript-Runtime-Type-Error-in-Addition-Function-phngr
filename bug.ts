function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct
console.log(result); // Output: 8

result = subtract(10, 5); // Correct
console.log(result); // Output: 5

result = add(5, "hello"); // Type Error at runtime
console.log(result);