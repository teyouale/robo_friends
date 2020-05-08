import React, { Component } from "react";
import CardList from "../Component/CardList";
import Search from "../Component/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 >ROBOFRIENDS</h1>
        <Search className="search"/> 
        <CardList />
      </div>
    );
  }
}

export default App;
