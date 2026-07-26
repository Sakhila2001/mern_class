import React, { useState, useEffect, use } from "react";
const allItems = ["Apple","Banana","Orange","Mango","Pineapple","Watermelon","Strawberry","Grapes","Kiwi","Lemon","Lime","Litchi","Guava","Papaya","Peach","Pear","Tomato","Cucumber","Eggplant","Okra","Squash","Zucchini","Avocado","Beans","Broccoli","Carrot","Cauliflower","Chili","Corn","Lettuce","Onion","Potato","Pumpkin","Sweet Potato","Taro","Tomato","Zucchini",];
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {},[]); This is syntax for useEffect
  useEffect(() => {
    if (searchTerm === "") {
      setResults([]);
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const filtered = allItems.filter((item) => item.includes(searchTerm));
        setResults(filtered);
        setIsLoading(false);
      }, 1000);
    }}, [searchTerm]);
  return (<div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for fruits"
        style={{ padding: "10px", width: "100%" }}/>
      {isLoading && <p>Loading...</p>}
      {!isLoading && searchTerm && results.length === 0 && (
        <p>No results found</p>
      )}
      {!isLoading && results.length > 0 && (
        <ul>
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>);};

export default Search;
