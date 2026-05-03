//1. var, let, const
// var name = "Sakhila"; //old way (function scoped)
// let age = 22; //can be changed later
// const country = "Nepal"; //can't be changed later

// console.log(name);
// console.log(age);
// console.log(country);

// let age = 22;
// age = 23; // allowed

// console.log(age);

// const country = "Nepal";
// country = "India"; // Shows ERROR

// //2. Naming & Keywords
// let 1name = "Ram";      // wrong    (1name → cannot start with number)
// let user_name = "Sita"; // right
// let var = 10;           // wrong   (1name → cannot start with number)
// let $price = 100;       // right
// let myName = "Hari";    // right

// 3. Data Types
// let str = "Hello"; // String
// let num = 100; // Number
// let bool = true; // Boolean
// let empty = null; // Null
// let notDefined; // Undefined

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof empty);
// console.log(typeof notDefined);

// 4. Operators
// let a = 10;
// let b = 5;

// console.log("a + b = " + (a + b));
// console.log("a - b = " + (a - b));
// console.log("a * b = " + a * b);
// console.log("a / b = " + a / b);
// console.log("a % b = " + (a % b));

//5. Comparison Operators
console.log(10 == "10");
console.log(10 === "10");
console.log(5 != "5");
console.log(5 !== "5");

//6. Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);
