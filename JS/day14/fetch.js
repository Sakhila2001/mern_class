//Fetch
async function getData() {
  const fakeData = await fetch("https://fakestoreapi.com/products/1");
  const data = await fakeData.json();
  console.log("data fetched", data);
}

getData();
