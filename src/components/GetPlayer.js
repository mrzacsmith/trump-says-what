import React, { useState } from "react";

const GetPlayer = () => {
  const [player, setPlayer] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log(player);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Player Name:</label>
      <input
        type="text"
        value={player}
        required
        onChange={e => setPlayer(e.target.value)}
      />
      <input type="submit" value="Get Player" />
    </form>
  );
};

export default GetPlayer;
