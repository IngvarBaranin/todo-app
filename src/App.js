import React, { Component } from "react";
import "./App.css";
import Name from "./components/name";
import Todos from "./components/todos";

class App extends Component {
    state = {
        currentComponent: 1,
        username: localStorage.getItem("username") || "",
    };

    handleName = (username) => {
        this.setState({ username: username }, () => {});
        localStorage.setItem("username", username);
    };

    render() {
        return (
            <div className="App">
                {this.state.username.length === 0 && (
                    <Name onGetName={this.handleName} />
                )}
                {this.state.username.length !== 0 && (
                    <Todos username={this.state.username} />
                )}
            </div>
        );
    }
}

export default App;
