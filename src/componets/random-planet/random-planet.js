import React from "react";
import "./random-planet.css";

const RandomPlanet = () => {
  return (
    <div className="random-planet-container">
      <div className="planet-image"></div>

      <div className="planet-info">
        <span className="planet-name">TatuinEbat</span>
        <p className="planet-text">Population: 20000</p>
        <p className="planet-text">Rotation Period: 26</p>
        <p className="planet-text">Diameter: 999</p>
      </div>
    </div>
  );
};

export default RandomPlanet;
