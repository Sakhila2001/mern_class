//Null Coalescing = used to check if a value is null or undefined
//It is used to avoid errors. Also it is used to access data and make sure there is no chance of crashing
const userName = null;
console.log("User Name: ", userName ?? "No Name"); //this is called null coalescing.
//It is similar to the ternary operator but it is used to check if a value is null or undefined