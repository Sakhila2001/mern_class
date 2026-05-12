//Spread Operator = to spread an array or object into another
//Object
const spreadObj = {
  name: "JS",
  founder: "Brendan Eich",
};

const data = { ...spreadObj, location: "Mountain View, California" };
console.log("ES5 Data: ", data);
