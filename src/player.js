// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";
import "./styles.css"

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" } }className="PlayerImage">
      <Card.Img variant="top" src={imageUrl} alt={name} width={250} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
            name: {name}<br />
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
