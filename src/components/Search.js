import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import { stringify } from "querystring";

class Search extends Component {
  state = {
    savedGems: []
  };

  fetchSavedGems = (gem, gemIsSaved) => {
    if (gemIsSaved === true) {
      this.setState({
        savedGems: [...this.state.savedGems, gem]
      });
    } else {
      this.setState({
        savedGems: this.state.savedGems.filter(savedGem => savedGem !== gem)
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // localStorage.setItem(
    //   "savedGems",
    //   this.state.savedGems.map(savedGem => savedGem.name)
    // );
  }

  render() {
    return (
      <div>
        <h1>Search for RubyGems</h1>
        <h2>
          Enter and search for Ruby Gems, save/unsave, and view saved gems.
        </h2>
        <Favorites
          savedGems={this.state.savedGems.map(savedGem => {
            return savedGem.name;
          })}
        />
        <SearchBar fetchSavedGems={this.fetchSavedGems} />
      </div>
    );
  }
}

export default Search;
