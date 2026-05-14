class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const output = new Calculator();

console.log("Add:", output.add(10, 20));
console.log("Subtract:", output.subtract(10, 20));
console.log("Multiply:", output.multiply(10, 20));  
console.log("Divide:", output.divide(10, 20));