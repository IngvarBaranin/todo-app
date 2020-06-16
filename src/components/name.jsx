import React, { Component } from "react";
import "./name.css";

class Name extends Component {
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("Name received in name.jsx: ", event.target.value);
            this.props.onGetName(event.target.value);
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1 id="name">What is your name?</h1>
                <div id="input">
                    <input
                        autoFocus
                        onKeyDown={this.handleKeyDown}
                        className="lg m-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    ></input>
                    <small>Press Enter when ready</small>
                </div>
            </React.Fragment>
        );
    }
}

export default Name;
