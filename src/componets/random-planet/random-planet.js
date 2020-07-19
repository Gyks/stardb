import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi";

export default class RandomPlanet extends React.Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapi = new SwapiService();
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapi.getPlanet(id).then((planet) => this.setState(planet));
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;
    const planetPictureLink = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    return (
      <div className="random-planet-container">
        <img
          className="planet-image"
          src={planetPictureLink}
          alt="loading..."
        />

        <div className="planet-info">
          <span className="planet-name">{name}</span>
          <p className="planet-text">Population: {population}</p>
          <p className="planet-text">Rotation Period: {rotationPeriod}</p>
          <p className="planet-text">Diameter: {diameter}</p>
        </div>
      </div>
    );
  }
}
