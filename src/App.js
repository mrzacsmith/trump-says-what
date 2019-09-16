import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteDisplay from "./components/QuoteDisplay.js";
import Header from "./components/Header.js";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [player, setPlayer] = useState("");
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    // setIsReady(true);
    axios
      .get(
        `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${player}`
      )
      .then(response => {
        // console.log(response.data);
        const item = response.data;
        setQuotes(item);
        // Change isReady to true, display quote box and remove form
        // setIsReady(false);
        // console.log("item", item.message);
      })
      .catch(error => {
        console.log("Could not load your data", error);
      });
  }, [player]);
  // console.log("quote", quotes.message);

  const addPlayer = player => {
    setPlayer(player);
    setIsReady(false);
  };

  // console.log("player", player);

  return (
    <div className="container">
      <Header name={player} addPlayer={addPlayer} isReady={isReady} />
      <QuoteDisplay quote={quotes.message} isReady={isReady} />
    </div>
  );
};

export default App;
