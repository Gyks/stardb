import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";
import SwapiService from "../../services/swapi";

export default class App extends React.Component {
  state = {
    selectedPerson: null,
  };
  swapi = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RandomPlanet />
          <div className="row mb-2">
            <div className="col-md-4">
              <ItemList
                getData={this.swapi.getAllPeople}
                onItemSelected={this.onPersonSelected}
              />
            </div>
            <div className="col-md-8">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
