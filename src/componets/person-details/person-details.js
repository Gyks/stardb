import React from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi";
import LoadingSpinner from "../loading-spinner";

export default class PersonDetails extends React.Component {
  swapi = new SwapiService();
  state = {
    person: null,
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.swapi.getPerson(personId).then((person) => {
      this.setState({ person: person });
    });
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    if (!this.state.person)
      return <div className="person-container">Select a person!</div>;
    const { person } = this.state;
    if (this.props.personId !== person.id)
      return (
        <div className="person-container">
          <LoadingSpinner />
        </div>
      );
    return (
      <div className="person-container">
        <img
          className="person-image"
          alt={`Picutere were attacked by evil drones`}
          src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}
        ></img>
        <div className="person-info">
          <span className="person-name">{person.name}</span>
          <p className="person-text">Gender: {person.gender}</p>
          <p className="person-text">Height: {person.height}</p>
          <p className="person-text">Mass: {person.mass}</p>
          <p className="person-text">Hair: {person.hairColor}</p>
          <p className="person-text">Birth: {person.birthDate}</p>
        </div>
      </div>
    );
  }
}
