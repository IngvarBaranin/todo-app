import React, { Component } from "react";
import "./todos.css";

class Todos extends Component {
    render() {
        return <h1 id="welcome">Hello, {this.props.username}!</h1>;
    }
}

export default Todos;
