interface Student {
  name: string;
  age: number;
  isStudent: boolean;
  hobbies: string[];
  numbers: number[];
  address?: string; // optional user can or cannot give address
}

const student: Student = {
  name: "John",
  age: 20,
  isStudent: true,
  hobbies: ["Coding", "Reading", "Dancing"],
  numbers: [1, 2, 3, 4, 5],
};

console.log(student);
