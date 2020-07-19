import React from "react";
import "./item-list.css";

const ItemList = () => {
  return (
    <ul className="list-group stardb-list">
      <li className="list-group-item list-group-item-action active">
        Tatuin 1
      </li>
      <li className="list-group-item list-group-item-action">Tatuin 2</li>
      <li className="list-group-item list-group-item-action">
        Another Tatuin 3
      </li>
      <li className="list-group-item list-group-item-action">Tatuin 4</li>
      <li className="list-group-item list-group-item-action">Tatuin 5</li>
      <li className="list-group-item list-group-item-action">Tatuin 6</li>
      <li className="list-group-item list-group-item-action">Tatuin 7</li>
      <li className="list-group-item list-group-item-action">Tatuin 8</li>
      <li className="list-group-item list-group-item-action">Tatuin 9</li>
    </ul>
  );
};

export default ItemList;
