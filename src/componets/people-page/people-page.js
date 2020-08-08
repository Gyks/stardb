import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import SwapiService from "../../services/swapi";

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
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return <Row left={peopleList} right={personDetails} />;
  }
}
