// Encapsulation
//Encapsulation is a mechanism that allows a class to hide its internal properties and methods
//It provides a way to control access to the internal properties and methods

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
//Encapsulation in here is done by wrapping data and methods inside a class.
// the:
// properties → name, age, location
// methods → getName(), getAge(), getLocation(), greet()
// are all grouped together inside the Student class.
// That is the basic idea of encapsulation:
// bundling data and methods into one unit (class).