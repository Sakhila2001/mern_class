//Rest Parameter = similar to spread operator but used for function parameters
//collect all the remaining arguments into an array
function restValue(...val) {
  const data = val;
  return data;
}
const arr = restValue(1, 2, 3, 4, 5);
console.log("Rest Parameter: ", arr);
