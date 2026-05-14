// Methods inside classes
// Methods are functions that are defined inside a class
// They can access the properties of the class
// They can also access the methods of the class
// They can also access the properties and methods of other classes
class Student {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getLocation() {
    return this.location;
  }
  greet() {
    console.log("Hello, I am " + this.name);
  }
}

const Output = new Student("John", 20, "USA");
console.log("Student1: ", Output);

Output.greet();
console.log("Student1 Name: ", Output.getName());
