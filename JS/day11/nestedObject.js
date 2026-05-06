//nested object

const student = {
  name: "John",
  age: 20,
  isStudent: true,
  address: {
    street: "123 Main St",
    city: "Kathmandu",
    country: "Nepal",
    zip: "12345",
  },
  hobbies: ["reading", "running", "coding"],
};

console.log("output:", student);
console.log("name:", student.name);
console.log("age:", student.age);
console.log("isStudent:", student.isStudent);
console.log("address:", student.address);
console.log("street:", student.address.street);
console.log("city:", student.address.city);
console.log("country:", student.address.country);
console.log("zip:", student.address.zip);
console.log("hobbies:", student.hobbies);
console.log("1st hobby:", student.hobbies[0]);
