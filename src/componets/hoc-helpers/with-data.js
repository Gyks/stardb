import React, { Component } from "react";
import LoadingSpinner from "../loading-spinner";
const withData = (View, getData) => {
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
      return <View {...this.props} data={this.state.data} />;
    }
  };
};

export default withData;
