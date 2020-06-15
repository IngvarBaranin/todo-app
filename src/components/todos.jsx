import React, { Component } from "react";

class Todos extends Component {
    render() {
        return (
            <h1
                style={{
                    fontSize: 100,
                    height: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                Hello, {this.props.username}!
            </h1>
        );
    }
}

export default Todos;
