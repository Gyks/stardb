import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import Row from "../row";
import SwapiService from "../../services/swapi";
import ItemDetails, { Record } from "../item-details";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {}
  render() {
    if (this.state.hasError) return <p>Error</p>;
    return this.props.children;
  }
}

export default class PeoplePage extends Component {
  swapi = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const peopleList = (
      <ItemList
        getData={this.swapi.getAllPeople}
        onItemSelected={this.onPersonSelected}
      >
        {(i) => `${i.name} - ${i.birthDate}`}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails
        getData={this.swapi.getPerson}
        onItemSelected={this.onPersonSelected}
        itemId={this.state.selectedPerson}
        getImageUrl={(id) => {
          return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        }}
      >
        <Record field="name" label="Name" />
        <Record field="gender" label="Gender" />
        <Record field="mass" label="Mass" />
        <Record field="height" label="Height" />
        <Record field="birthDate" label="Birth Date" />
        <Record field="hairColor" label="Hair Color" />
      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <Row left={peopleList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
