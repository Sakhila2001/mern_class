//filtering and mapping complex data

const languages = [
  { name: "JavaScript", level: "beginner" },
  { name: "Python", level: "intermediate" },
  { name: "Java", level: "advanced" },
  { name: "C++", level: "expert" },
];

const filteredLanguages = languages.filter(
  (language) => language.level === "intermediate",
);
console.log("filteredLanguages", filteredLanguages);

const language = [
  { name: "JavaScript", age: 20 },
  { name: "Python", age: 30 },
];

//filtering
const lan = language.filter((l) => l.age > 20);
console.log("lan", lan);

//mapping
const lan2 = language.map((l) => l.name);
console.log("lan2", lan2);

const programs = [
  { name: "JavaScript", age: 20 },
  { name: "Python", age: 30 },
  { name: "Java", age: 40 },
  { name: "C++", age: 50 },
];
//combination
const program = programs.filter((p) => p.age > 20).map((p) => p.name);
console.log("programs above 20", program);

const program2 = programs.filter((p) => p.age < 40).map((p) => p.name);
console.log("programs below 40", program2);
