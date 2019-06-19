import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";

class Search extends Component {
  state = {
    savedGems: []
  };

  fetchSavedGems = (gem, gemIsSaved) => {
    gemIsSaved === true
      ? this.setState({
          savedGems: [...this.state.savedGems, gem]
        })
      : this.setState({
          savedGems: this.state.savedGems.filter(savedGem => savedGem !== gem)
        });
  };

  render() {
    return (
      <div>
        <h1>Search for RubyGems</h1>
        <h2>
          Enter and search for Ruby Gems, save/unsave, and view saved gems.
        </h2>
        <Favorites />
        <SearchBar fetchSavedGems={this.fetchSavedGems} />
      </div>
    );
  }
}

export default Search;
