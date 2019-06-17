"use strict";

const e = React.createElement;

class App extends React.Component {
  render() {
    return <h1>App.js</h1>;
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);
