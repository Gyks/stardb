import React from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi";
import LoadingSpinner from "../loading-spinner";
import ErrorHandler from "../error-handler";

export default class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };
  swapi = new SwapiService();

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 1; // 0 can break shit
    this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  render() {
    const { planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorHandler /> : null;
    const loadingSpinner = loading ? <LoadingSpinner /> : null;
    const content = !loading && !error ? <PlanetInfo planet={planet} /> : null;
    return (
      <div className="random-planet-container">
        {errorMessage}
        {content}
        {loadingSpinner}
      </div>
    );
  }
}

const PlanetInfo = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  const planetPictureLink = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
  return (
    <>
      <img
        className="planet-image"
        src={planetPictureLink}
        alt="Loading..."
        placeholder=""
      />
      <div className="planet-info">
        <span className="planet-name">{name}</span>
        <p className="planet-text">Population: {population}</p>
        <p className="planet-text">Rotation Period: {rotationPeriod}</p>
        <p className="planet-text">Diameter: {diameter}</p>
      </div>
    </>
  );
};
