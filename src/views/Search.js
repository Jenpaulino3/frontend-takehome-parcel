import React, { Component } from "react";
import SearchBar from "../components/SearchBar";

class Search extends Component {
  //   state = {};
  render() {
    return (
      <div>
        <h1>Search for Ruby Gems</h1>
        <p>Save Gems and View Favorites</p>
        <SearchBar />
      </div>
    );
  }
}

export default Search;
