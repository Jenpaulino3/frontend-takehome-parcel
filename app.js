"use strict";

import Search from "./src/components/Search";

const e = React.createElement;

class App extends React.Component {
  render() {
    return <Search />;
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(e(App), domContainer);
