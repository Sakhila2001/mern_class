//Async/Await
//async = asynchronous
//await = wait for the promise to resolve
//async syntax
//  async function name() {
//    //code
//  }

//await is dependent on async but not the other way around

async function greet() {
  console.log("Hello");
  return "Sakhila";
}
greet()
  .then(function (data) {
    console.log("async data:", data);
  })
  .catch(function (error) {
    console.log("async error:", error);
  });
