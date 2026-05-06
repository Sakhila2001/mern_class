//map in array

const arr = [1, 2, 3, 4, 5];

// map makes duplicate array and returns a new array but forEach does not return a new array
const mapValue = arr.map((value) => {
  return value;
});
console.log("mapValue", mapValue);

function double(value) {
  return value * 2; // double the value 1=>2, 2=>4, 3=>6, 4=>8, 5=>10
}
const mapValue2 = arr.map(double);
console.log("mapValue2", mapValue2);
