import React, { Component } from "react";

class Name extends Component {
    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log("Name received in name.jsx: ", event.target.value);
            this.props.onGetName(event.target.value);
        }
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: 100,
                        height: "50vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    What is your name?
                </h1>
                <input
                    autoFocus
                    onKeyDown={this.handleKeyDown}
                    style={{
                        height: "10vh",
                        width: "80vh",
                        fontSize: 50,
                        textIndent: "15px",
                    }}
                    className="lg m-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                ></input>
                <small>Press Enter when ready</small>
            </div>
        );
    }
}

export default Name;
