import React, { useState } from "react";
// import GetPlayer from "./GetPlayer";

const Header = ({ addPlayer, name }) => {
  const [playerForm, setPlayerForm] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(playerForm);
    addPlayer(playerForm);
  };

  return (
    <header>
      <nav>
        <p>Welcome, {name}!</p>
        <form onSubmit={handleSubmit}>
          <label>Player Name:</label>
          <input
            type="text"
            value={playerForm}
            required
            onChange={e => setPlayerForm(e.target.value)}
          />
          <input type="submit" value="Get Player" />
        </form>
      </nav>
    </header>
  );
};

export default Header;
