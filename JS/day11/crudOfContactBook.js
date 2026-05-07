//CRUD of Contact Book
const contactBook = [
  { name: "John", phone: "1234567890", email: "john@example.com" },
  { name: "Jane", phone: "0987654321", email: "jane@example.com" },
  { name: "Bob", phone: "9876543210", email: "bob@example.com" },
  { name: "Alice", phone: "1234567890", email: "alice@example.com" },
  { name: "David", phone: "0987654321", email: "david@example.com" },
];
//Read
console.log("List of contacts", contactBook);
console.log("Contact of John", contactBook[0]);
//Create
contactBook.push({
  name: "Carol",
  phone: "9876543210",
  email: "carol@example.com",
});
console.log("Contact after create", contactBook);
//Update
contactBook[0].phone = "9463693876";
console.log("ContactBook after update in John", contactBook);
//Delete
delete contactBook[0];
console.log("contactBook after delete in John", contactBook);
