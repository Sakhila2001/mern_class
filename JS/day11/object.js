//Object
//Object is a data structure that is used to store key-value pairs.
//Object is a collection of key-value pairs that are stored in a single variable.

//creating an object
const student = {
  name: "John",
  age: 20,
  isStudent: true,
};
console.log("output:", student);

//accessing specific properties
console.log("name:", student.name);
console.log("age:", student.age);
console.log("isStudent:", student.isStudent);

//Basic Object CRUD
//Add operation
student.contact = 23456789;
console.log("new student info:", student);

//Update operation
student.age = 21;
console.log("new student info with updated age:", student);

//Delete operation
delete student.contact;
console.log("student info with deleted contact:", student);
