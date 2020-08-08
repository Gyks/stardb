import React from "react";
import "./item-details.css";
import SwapiService from "../../services/swapi";
import LoadingSpinner from "../loading-spinner";

const Record = ({ item, field, label }) => {
  return (
    <p className="item-text">
      {label} {item[field]}
    </p>
  );
};

export default class ItemDetails extends React.Component {
  swapi = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then((item) => {
      this.setState({ item: item, image: getImageUrl(itemId) });
    });
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item)
      return <div className="item-container">Select a item!</div>;
    const { item } = this.state;
    if (this.props.itemId !== item.id)
      return (
        <div className="item-container">
          <LoadingSpinner />
        </div>
      );
    return (
      <div className="item-container">
        <img
          className="item-image"
          alt={`Picutere were attacked by evil drones`}
          src={this.state.image}
        ></img>
        <div className="item-info">
          {React.Children.map(this.props.children, (child, idx) => {
            console.log(item);
            return React.cloneElement(child, { item });
          })}
        </div>
      </div>
    );
  }
}
export { Record };
