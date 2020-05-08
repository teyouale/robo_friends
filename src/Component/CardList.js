import React, { Component } from "react";
import Card from "../Component/Card";

class CardList extends Component {
  render() {
    const {robots}=this.props;
    const robotsList = robots.map((robot, i) => {
      return (
        <Card
          name={robots[i].name}
          red={robots[i].colour}
        />
      );
    });
    return (
      <div className="ui centered cards ">
        {robotsList}
      </div>
    );
  }
}

export default CardList;
