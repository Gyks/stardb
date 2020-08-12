import React, { Component } from "react";
import "./item-list.css";
import withData from "../hoc-helpers";

const ItemList = (props) => {
  const renderListItems = (items) => {
    return items.map((item) => {
      const label = props.children(item);
      return (
        <li
          key={item.id}
          onClick={() => {
            props.onItemSelected(item.id);
          }}
          className={"list-group-item list-group-item-action"}
        >
          {label}
        </li>
      );
    });
  };

  const { data } = props;
  const people = renderListItems(data);
  return <ul className="list-group stardb-list">{people}</ul>;
};

export default withData(ItemList);
