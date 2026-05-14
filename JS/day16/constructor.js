//CONSTRUCTOR= It initializes the properties of an object
//Always make class name as capitalized

class Student {
    //constructor automatically runs when an object is created
    //this keyword refers to the object
  constructor(name, age, location) { //name, age, gender are parameters
    //storing the values in the object
    this.name = name; //this.name ="John";
    this.age = age;//this.age = 20;
    this.location = location;//this.location = "USA";
  }
}

const output = new Student("John", 20, "USA");
console.log("Constructor Output: ", output);