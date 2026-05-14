// Inheritence
//Inheritance is a mechanism that allows a class to inherit properties and methods from parent classes

//Parent Class
class Animal {
  eat() {
    //method
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
}
//Child Class
class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}
class Cat extends Animal {
    
}

const tom = new Dog();
const jack = new Cat();
tom.eat(); //inheriting eat() method from Animal class
tom.bark();
jack.sleep();
