//Array Destructuring
const arr = [1, 2, 3, 4, 5];

// ES5 feature
console.log("ES5: ", arr[0]);
console.log("ES5: ", arr[1]);
console.log("ES5: ", arr[2]);
console.log("ES5: ", arr[3]);
console.log("ES5: ", arr[4]);

// ES6 feature
const [first, second, third, fourth, fifth] = arr;
console.log("ES6: ", first);
console.log("ES6: ", second);
console.log("ES6: ", third);
console.log("ES6: ", fourth);
console.log("ES6: ", fifth);
