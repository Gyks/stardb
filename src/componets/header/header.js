import React from "react";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="nav-brand text-success">StarDB</div>
      <div className="nav-item">Persons</div>
      <div className="nav-item">Planets</div>
      <div className="nav-item">Starships</div>
    </nav>
  );
};

export default Header;
