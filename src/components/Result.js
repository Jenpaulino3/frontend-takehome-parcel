import React, { Component } from "react";

class Result extends Component {
  state = {
    gemIsSaved: false
  };
  onButtonClick = () => {
    if (this.state.gemIsSaved === false) {
      this.props.fetchSavedGems(this.props.gem, true);
      this.setState({
        gemIsSaved: true
      });
    } else {
      this.props.fetchSavedGems(this.props.gem, false);
      this.setState({
        gemIsSaved: false
      });
    }
  };

  render() {
    return (
      <div className="result flex align-center">
        <p>{this.props.gem.name}</p>
        <button onClick={this.onButtonClick}>
          {!this.state.gemIsSaved ? "Save" : "Unsave"}
        </button>
      </div>
    );
  }
}

export default Result;
