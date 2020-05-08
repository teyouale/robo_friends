import React, { Component } from "react";

class Card extends Component {
  render() {
    const {name,email,red}= this.props;
    return (
        <div className= {`ui link ${red} card`}>
          <div className="image">
            <img src='photo.png' alt="photo"/>
          </div>
          <div className="content">
            <a className="header">{name}</a>
            <div className="meta">
              <span className="date">{email}</span>
            </div>
            <div className="description">
              {name} is an art director living in New York.
            </div>
          </div>
      </div>
    );
  }
}

export default Card;
