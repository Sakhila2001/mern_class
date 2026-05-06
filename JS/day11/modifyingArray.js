//modifying array

const arrpush = [1, 2, 3, 4, 5];
//push -> add element to the end
arrpush.push(6);
console.log("6 is added to the end of the array", arrpush);

const arrpop = [1, 2, 3, 4, 5];
//pop  -> remove last element
arrpop.pop();
console.log("5 is removed from the array", arrpop);

const arrunshift = [1, 2, 3, 4, 5];
//unshift -> add element to the beginning
arrunshift.unshift(0);
console.log("0 is added to the beginning of the array", arrunshift);

const arrshift = [1, 2, 3, 4, 5];
//shift -> remove first element
arrshift.shift();
console.log("1 is removed from the array", arrshift);

const arrreverse = [1, 2, 3, 4, 5];
//reverse -> reverse the order of the elements
arrreverse.reverse();
console.log("reversed array", arrreverse);

const arrsort = [1, 3, 5, 4, 2];
//sort -> sort the elements
arrsort.sort();
console.log("sorted array", arrsort);

const arrslice = [1, 2, 3, 4, 5];
//slice -> returns a new array with the elements in the specified range
console.log("sliced array", arrslice.slice(2, 4)); //

const arrsplice = [1, 2, 3, 4, 5];
//splice -> remove elements and insert new elements
arrsplice.splice(2, 4);
console.log("Spliced array", arrsplice);

arrsplice.splice(2, 0, 6, 7, 8); // -> process: remove elements = 2, insert elements = 6, 7, 8
console.log("Spliced array", arrsplice);

const arrfind = [1, 2, 3, 4, 5];
//find -> returns the first index of the element in the array
const findValue = arrfind.find((value) => value === 5);
console.log("find element", findValue);

const arrfiltereven = [1, 2, 3, 4, 5];
const filterValue = arrfiltereven.filter((value) => value % 2 === 0);
console.log("filter element is even", filterValue);

const arrfilterodd = [1, 2, 3, 4, 5];
const filterValue2 = arrfilterodd.filter((value) => value % 2 !== 0);
console.log("filter element is odd", filterValue2);

const arrincludes = [1, 2, 3, 4, 5];
//includes -> returns true if the element is present in the array
console.log("includes element", arrincludes.includes(5));

arrincludes.includes(6); // -> returns false

const arrindexof = [1, 2, 3, 4, 5];
//indexOf -> returns the first index of the element in the array
console.log("indexOf element", arrindexof.indexOf(5));

arrindexof.indexOf(6); // -> returns -1

const arrjoin = [1, 2, 3, 4, 5];
//join -> joins all the elements of an array into a string
console.log("join element", arrjoin.join()); // -> joins all the elements of an array into a string   1,2,3,4,5

arrjoin.join("-"); // -> joins all the elements of an array into a string   1-2-3-4-5
