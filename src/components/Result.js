import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false,
    savedGems: []
  };

  onButtonClick = () => {
    this.state.gemIsSaved === false
      ? this.setState({
          gemIsSaved: true,
          savedGems: [...this.state.savedGems, this.props.gem]
        })
      : this.setState({
          gemIsSaved: false,
          savedGems: this.state.savedGems.filter(
            savedGem => savedGem !== this.props.gem
          )
        });
  };

  render() {
    const { gemIsSaved } = this.state;
    const { gem } = this.props;
    return (
      <div className="result flex align-center">
        <p>{gem.name}</p>
        <button onClick={this.onButtonClick}>
          {!gemIsSaved ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
