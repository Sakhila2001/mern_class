//Optional Chaining -? = to check if a value is undefined or null
//It is used to avoid errors. Also it is used to access data and make sure there is no chance of crashing
const data = {};
const output = data?.author?.name;
console.log("Data: ", output);
