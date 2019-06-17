"use strict";

import Search from "./src/views/Search";

const e = React.createElement;

class App extends React.Component {
  render() {
    return <Search />;
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);
