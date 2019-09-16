import React, { useState } from "react";
// import GetPlayer from "./GetPlayer";

const Header = ({ addPlayer, name, isReady }) => {
  const [playerForm, setPlayerForm] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(playerForm);
    addPlayer(playerForm);
  };

  const readyForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={playerForm}
          required
          placeholder="Enter your first name"
          onChange={e => setPlayerForm(e.target.value)}
        />
        <input type="submit" value="Get Player" />
      </form>
    );
  };

  return (
    <header>
      <nav>
        {isReady ? readyForm() : <p>Trash Talking Time {name}</p>}

        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={playerForm}
            required
            placeholder="Enter your first name"
            onChange={e => setPlayerForm(e.target.value)}
          />
          <input type="submit" value="Get Player" />
        </form> */}
      </nav>
    </header>
  );
};

export default Header;
