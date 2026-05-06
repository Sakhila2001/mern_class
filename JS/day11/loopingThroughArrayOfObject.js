//looping through array of object

const students = [
  { name: "John", age: 20, isStudent: true },
  { name: "Jane", age: 22, isStudent: false },
  { name: "Bob", age: 25, isStudent: true },
  { name: "Alice", age: 18, isStudent: false },
  { name: "David", age: 21, isStudent: true },
];

for (let i = 0; i < students.length; i++) {
  console.log("Student " + (i + 1) + ": " + students[i].name);
}
