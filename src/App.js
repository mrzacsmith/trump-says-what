import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [player, setPlayer] = useState("Fred");

  useEffect(() => {
    axios
      .get(
        `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${player}`
      )
      .then(response => {
        console.log(response.data);
        const item = response.data;
        setQuotes(item);
        console.log("item", item.message);
      })
      .catch(error => {
        console.log("Could not load your data", error);
      });
  }, []);
  console.log("quote", quotes.message);
  return (
    <div>
      <h2>Trump says what?</h2>
      <p>{quotes.message}</p>
    </div>
  );
};

export default App;
