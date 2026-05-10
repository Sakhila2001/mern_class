//Callback style
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

setTimeout(() => {
  console.log("login User");
  setTimeout(() => {
    console.log("Get user data");
    setTimeout(() => {
      console.log("you are logged in");
    }, 1000);
  }, 2000);
}, 1000);

console.log("6");
//Your code becomes deeply nested
//hard to debug
//Difficult to understand flow
//violates DRY principle
