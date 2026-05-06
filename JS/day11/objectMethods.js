//Object Methods

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
  greet: function () {
    console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old." + " I am from " + this.address.city + ".");
  },
};

student.greet();
