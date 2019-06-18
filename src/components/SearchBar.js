import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." id="search" name="search" />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
