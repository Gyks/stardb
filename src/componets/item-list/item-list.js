import React from "react";
import "./item-list.css";
import LoadingSpinner from "../loading-spinner";

export default class ItemList extends React.Component {
  state = {
    itemList: null,
    itemActive: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => this.setState({ itemList }));
  }

  renderListItems = (items) => {
    let style = "list-group-item list-group-item-action";
    return items.map((item, idx) => {
      if (idx === this.state.itemActive) {
        style = "list-group-item list-group-item-action active";
      } else {
        style = "list-group-item list-group-item-action";
      }
      return (
        <li
          key={item.id}
          onClick={() => {
            this.props.onItemSelected(item.id);
            this.setState({ itemActive: idx });
          }}
          className={style}
        >
          {item.name}
        </li>
      );
    });
  };

  render() {
    const { itemList: peopleList } = this.state;
    if (!peopleList)
      return (
        <ul className="list-group stardb-list">
          <LoadingSpinner />
        </ul>
      );
    const people = this.renderListItems(peopleList);
    return <ul className="list-group stardb-list">{people}</ul>;
  }
}
