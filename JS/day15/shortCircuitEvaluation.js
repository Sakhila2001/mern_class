//Short Circuit Evaluation
//It is used to check if a condition is true or false

// || = OR operator //if even one of the condition is true then it will return true
// && = AND operator //if even one of the condition is false then it will return false

//OR Operator
const value = true;
const value2 = false;

if (value || value2) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

//AND Operator
const value3 = true;
const value4 = false;

if (value3 && value4) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}
