//Type aliases and interfaces= to make our custom types of object values or shape of object
type Student = {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  numbers: number[];
  address?: string; // optional user can or cannot give address
};

const student: Student = {
  name: "John",
  age: 20,
  isStudent: true,
  hobbies: ["Coding", "Reading", "Dancing"],
  numbers: [1, 2, 3, 4, 5],
};

console.log(student);
