//Promise
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

const newPromiseExample = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("data fetched");
  } else {
    reject("error: fetching data");
  }
});

newPromiseExample
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally"); //always executed whether error or not
  });
console.log("6");
//Much cleaner structure: Callback style (messy when nested)
//Better readability (important)
//Centralized error handling::
//  In callback style, you have to check for errors in every nested function.
