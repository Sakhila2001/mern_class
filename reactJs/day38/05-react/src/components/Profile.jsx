import React, { useState, useEffect, use } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); //true because we need to instantly load the user data
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("https://api.github.com/users/octocat");
      console.log("data", res);
      const data = await res.json();
      setUser(data);
      setIsLoading(false);
    }
    fetchUser();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default Profile;
