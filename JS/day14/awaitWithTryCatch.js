function authSystem(val) {
  const authData = new Promise((resolve, reject) => {
    if (val === "admin") {
      console.log("loading..............................");
      setTimeout(() => {
        const adminData = "You are loggedIn to dashboard";
        resolve(adminData);
      }, 3000);
    } else {
      reject("You are not an admin");
    }
  });
  return authData;
}
async function showData() {
  try {
    const result = await authSystem("admin1");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
showData();
