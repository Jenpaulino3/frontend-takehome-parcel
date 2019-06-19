import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: "",
    searchQuery: "",
    error: null,
    isSearching: false,
    items: []
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    fetch("http://localhost:3000/api/v1/search.json?query=rails")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isSearching: true,
            items: result
          });
        },
        error => {
          this.setState({
            isSearching: true,
            error
          });
        }
      );
    event.preventDefault();
  };

  render() {
    const { error, isSearching, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isSearching) {
      return (
        <div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <label className="visuallyhidden" id="search">
              Search{" "}
            </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Search..."
              id="search"
              name="search"
            />
            <button type="submit" value="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="search-and-results">
          <form className="search-form" onSubmit={this.handleSubmit}>
            <label className="visuallyhidden" id="search">
              Search{" "}
            </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Search..."
              id="search"
              name="search"
            />
            <button type="submit" value="submit">
              <i className="fa fa-search" />
            </button>
          </form>
          <p>Items</p>
          <div className="results">
            {items.map(item => {
              return <p key={item.sha}>{item.name}</p>;
            })}
          </div>
        </div>
      );
    }
  }
}

export default SearchBar;
