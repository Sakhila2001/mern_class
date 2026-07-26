function getName<T>(str: T): T {
  //T is the type of the parameter and <> is used to declare the generic type
  return str;
}
console.log(getName("Ram")); //string is also accepted
console.log(getName(10)); //number is also accepted
console.log(getName(true)); //boolean is also accepted
console.log(getName([1, 2, 3])); //number array is also accepted

function getValue(num1: number, num2: number): number {
  //not using generics
  return num1 + num2;
}
console.log(getValue(10, 20));
//console.log(getValue("10", "20")); //string is not accepted
//console.log(getValue(true, false)); //boolean is not accepted

//example 2
interface Box<Kushal> {
  value: Kushal;
}

const numberBox: Box<number> = {
  value: 100,
};

const stringBox: Box<string> = {
  value: "Kushal",
};

const booleanBox: Box<boolean> = {
  value: true,
};

const arrayBox: Box<number[]> = {
  value: [1, 2, 3],
};

console.log(numberBox.value); //100
console.log(stringBox.value); //Kushal
console.log(booleanBox.value); //true
console.log(arrayBox.value); //[1, 2, 3]
