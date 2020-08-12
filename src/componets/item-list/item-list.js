import React, { Component } from "react";
import "./item-list.css";
import LoadingSpinner from "../loading-spinner";

class ItemList extends React.Component {
  renderListItems = (items) => {
    return items.map((item) => {
      const label = this.props.children(item);
      return (
        <li
          key={item.id}
          onClick={() => {
            this.props.onItemSelected(item.id);
          }}
          className={"list-group-item list-group-item-action"}
        >
          {label}
        </li>
      );
    });
  };

  render() {
    const { data } = this.props;
    const people = this.renderListItems(data);
    return <ul className="list-group stardb-list">{people}</ul>;
  }
}

const Wrapper = () => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      const { getData } = this.props;
      getData().then((data) => this.setState({ data }));
    }

    render() {
      const { data: peopleList } = this.state;
      if (!peopleList)
        return (
          <ul className="list-group stardb-list">
            <LoadingSpinner />
          </ul>
        );
      return <ItemList {...this.props} data={this.state.data} />;
    }
  };
};

export default Wrapper();
