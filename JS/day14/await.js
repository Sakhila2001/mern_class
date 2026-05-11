//Await = waits or hold the data until the data is not loaded properly
// await depends on async

function getsomething() {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataAchieved = "Data Loaded";
      resolve(dataAchieved);
    }, 12000);
  });
  return data; // function should always return a promise
}
async function showData() {
  console.log("loading..............................");
  const result = await getsomething();
  console.log(result);
}
showData();
