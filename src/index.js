import SwapiService from "./services/swapi";
import ReactDOM from "react-dom";
import React from "react";
import App from "./componets/app";

const swapi = new SwapiService();

ReactDOM.render(<App />, document.getElementById("root"));
