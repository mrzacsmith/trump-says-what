import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteDisplay from "./components/QuoteDisplay.js";
import Header from "./components/Header.js";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [player, setPlayer] = useState("Fred");

  useEffect(() => {
    axios
      .get(
        `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${player}`
      )
      .then(response => {
        // console.log(response.data);
        const item = response.data;
        setQuotes(item);
        // console.log("item", item.message);
      })
      .catch(error => {
        console.log("Could not load your data", error);
      });
  }, []);
  // console.log("quote", quotes.message);
  return (
    <div>
      <Header name={player} />
      <QuoteDisplay quote={quotes.message} />
    </div>
  );
};

export default App;
