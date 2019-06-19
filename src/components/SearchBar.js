import React, { Component } from "react";
import Result from "./Result";
class SearchBar extends Component {
  state = {
    value: "",
    searchQuery: "",
    error: null,
    isSearching: false,
    gems: []
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    fetch(`http://localhost:3000/api/v1/search.json?query=${this.state.value}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isSearching: true,
            gems: result
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
    const { error, gems } = this.state;
    if (error) {
      return <div className="error-message">Error: {error.message}</div>;
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
          <div className="results">
            {gems.map((gem, index) => {
              return <Result key={index} className={gem.name} gem={gem} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default SearchBar;
