// src/PlayersList.js
import React from "react";
import Player from "./player";
import playersData from "./players";
import "./styles.css"

const PlayersList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
