import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Search for RubyGems</h1>
        <h2>
          Enter and search for Ruby Gems, save/unsave, and view saved gems.
        </h2>
        <Favorites />
        <SearchBar />
      </div>
    );
  }
}

export default Search;
