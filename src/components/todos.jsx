import React, { Component } from "react";
import "./todos.css";

let dateOptions = { dateStyle: "full" };
let date = new Date().toLocaleString("en-GB", dateOptions);
let timeOptions = { timeStyle: "short", hour12: false };
let time = new Date().toLocaleString("en-GB", timeOptions);

class Todos extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 id="welcome">Hello, {this.props.username}!</h1>
                <h1 id="time">{time}</h1>
                <h1 id="date">{date}</h1>
            </React.Fragment>
        );
    }
}

export default Todos;
