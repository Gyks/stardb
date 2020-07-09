import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-4">
            <ItemList />
          </div>
          <div className="col-md-8">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
