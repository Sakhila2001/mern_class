//asyncronous code is not blocking 
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

setTimeout(() => {
  console.log("running");
}, 1000);
console.log("6"); //this will be printed after 5 
