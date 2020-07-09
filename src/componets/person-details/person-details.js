import React from "react";
import "./person-details.css";

const PersonDetails = () => {
  return (
    <div className="person-container">
      <div className="person-image"></div>
      <div className="person-info">
        <span className="person-name">TatuinEbat</span>
        <p className="person-text">Population: 20000</p>
        <p className="person-text">Rotation Period: 26</p>
        <p className="person-text">Diameter: 999</p>
        <p className="person-text">Mass: 212212</p>
        <p className="person-text">Gravity: 55</p>
        <p className="person-text">OtherShit: 1/21</p>
      </div>
    </div>
  );
};

export default PersonDetails;
