import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div class="ui category search">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search animals..." />
          <i class="search icon"></i>
        </div>
      </div>
    );
  }
}

export default Search;
