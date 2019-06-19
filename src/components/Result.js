import React, { Component } from "react";

class Result extends Component {
  state = {
    savedGem: false
  };
  render() {
    const { gem } = this.props;
    return (
      <div className="flex align-center">
        <p>{gem.name}</p>
        <button>Save</button>
      </div>
    );
  }
}

export default Result;
