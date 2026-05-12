//Destructuring = to extract values from an array or object
//In JS every thing is an object

//Object
const person = {
  name: "JS",
  founder: "Brendan Eich",
  location: "Mountain View, California",
  data: true,
  age: 30,
};

//ES5 feature
console.log("ES5 Founder: ", person.founder);
console.log("ES5 Name: ", person.name);
console.log("ES5 Location: ", person.location);
console.log("ES5 Data: ", person.data);//DRY principle Violation


//Destructuring
//ES6 feature
const { name, founder, location, data, age } = person;
console.log("ES6 Name: ", name);
console.log("ES6 Location: ", location);
console.log("ES6 Data: ", data);
console.log("ES6 Founder: ", founder);
