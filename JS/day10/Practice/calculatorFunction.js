//Calculator Function
// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "Invalid operator";
//   }
// }

// console.log("sum of 10 and 5 is " + calculator(10, 5, "+"));
// console.log("difference of 10 and 5 is " + calculator(10, 5, "-"));
// console.log("product of 10 and 5 is " + calculator(10, 5, "*"));
// console.log("quotient of 10 and 5 is " + calculator(10, 5, "/"));



// Calculator Function using if...else
function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return b !== 0 ? a / b : "Cannot divide by zero";
  } else {
    return "Invalid operator";
  }
}

console.log("sum of 10 and 5 is " + calculator(10, 5, "+"));
console.log("difference of 10 and 5 is " + calculator(10, 5, "-"));
console.log("product of 10 and 5 is " + calculator(10, 5, "*"));
console.log("quotient of 10 and 5 is " + calculator(10, 5, "/"));