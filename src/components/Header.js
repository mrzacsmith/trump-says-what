import React, { useState } from "react";

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
        <input type="submit" value="Let's talk!" />
      </form>
    );
  };

  return (
    <header>
      <nav>
        {isReady ? readyForm() : <p>Trump trash talking time {name}!</p>}
      </nav>
    </header>
  );
};

export default Header;
