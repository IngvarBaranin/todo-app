import React, { Component } from "react";
import "./todos.css";

let dateOptions = { dateStyle: "full" };
let timeOptions = { timeStyle: "medium", hour12: false };

class Todos extends Component {
    state = {
        date: new Date().toLocaleString("en-GB", dateOptions),
        time: new Date().toLocaleString("en-GB", timeOptions),
    };

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleString("en-GB", dateOptions),
        });
        this.setState({
            time: new Date().toLocaleString("en-GB", timeOptions),
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1 id="welcome">Hello, {this.props.username}!</h1>
                <h1 id="time">{this.state.time}</h1>
                <h1 id="date">{this.state.date}</h1>
            </React.Fragment>
        );
    }
}

export default Todos;
