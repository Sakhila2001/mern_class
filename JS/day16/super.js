// Super
// super() is a keyword that allows a method to call the parent class method
// super() is used inside the child class method


class Animal { //parent class
    constructor(name) {
        this.name = name;
    }
}
// Child Class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //calling the parent class constructor. It must be the first line of the child class constructor
        this.breed = breed;
    }   
}

const tom = new Dog("My dog's name is Tom", "He is a Labrador");
console.log(tom);
console.log(tom.name);
console.log(tom.breed);
