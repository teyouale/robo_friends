import React, { Component } from "react";
import CardList from "../Component/CardList";
import Search from "../Component/Search";
import "./App.css";
import { robots } from "../robots";

class App extends Component {
  constructor(){
    super();
    this.state={
      robots: robots,
      searchfield:" "
    }
  }

  searchChange = ()=>{
    console.log("hi");
  }
   
  render() {
    return (
      <div>
        <h1 >ROBOFRIENDS</h1>
        <Search className="search" searchChange={this.searchChange} /> 
        <CardList robots={robots}/>
      </div>
    );
  }
}



export default App;
