import React, { Component } from "react";
import "./App.css";

function apiFetch(route, dataRequest) {
  return fetch(route)
    .then(res => res.json());
}

class App extends Component {
  state = {
    message: '',
  }

  componentDidMount() {
    apiFetch("/hello").then(res => {
      this.setState({ message: res.express })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.message}</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
