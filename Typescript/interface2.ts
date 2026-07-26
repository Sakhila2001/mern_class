//Project thulo huda modular banaune
interface Person {
  name: string;
}
interface Student1 extends Person {
  age: number;
}
interface Student2 extends Student1 {
  address: string;
}

const student: Student1 = {
  name: "John",
  age: 20,
  // address: "Bangalore" cannot use this because address is not in Student1 interface
};

const student2: Student2 = {
  name: "John",
  age: 20,
  address: "Bangalore",
};

console.log("Student1", student);
console.log("Student2", student2);
