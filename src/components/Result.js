import React, { Component } from "react";

class Result extends Component {
  state = {
    savedGem: false
  };

  onButtonClick = () => {
    this.state.savedGem === false
      ? this.setState({
          savedGem: true
        })
      : this.setState({
          savedGem: false
        });
  };

  render() {
    const { savedGem } = this.state;
    const { gem } = this.props;
    return (
      <div className="result flex align-center">
        <p>{gem.name}</p>
        <button onClick={this.onButtonClick}>
          {!savedGem ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
