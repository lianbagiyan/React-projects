import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

const nativeState = JSON.parse(window.localStorage.getItem("state"));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = nativeState || {
      count: 0,
      step: 1,
      minValue: 0,
      maxValue: 100,
    };
  }

  handleInc = () => {
    this.setState((prevState) => ({
      count: prevState.count + prevState.step,
    }));
  };

  handleDec = () => {
    this.setState((prevState) => ({
      count: prevState.count - prevState.step,
    }));
  };

  handleReset = () => {
    this.setState((prevState) => ({
      count: 0 || prevState.minValue,
    }));
  };

  handleMaxValue = ({ target: { value } }) => {
    this.setState({
      maxValue: Number(value),
    });
  };

  handleMinValue = ({ target: { value } }) => {
    if (value < 0) {
      value = 0;
    }

    if (value > this.state.maxValue) {
      alert(`Stop. You need to write number less ${this.state.maxValue}`);
      value = this.state.maxValue;
    }

    this.setState({
      minValue: Number(value),
      count: Number(value),
    });
  };

  handleAddBy = (e) => {
    const normalizedValue = Number(e.target.value);

    if (normalizedValue === "") {
      this.setState(() => ({
        step: 1,
      }));
    }

    this.setState({
      step: normalizedValue,
    });
  };

  render() {
    const memory = window.localStorage;
    memory.setItem("state", JSON.stringify(this.state));

    return (
      <div className="container">
        <h3 className="title">My first project in React. Hope you like it!</h3>
        <div className="counter-body">
          <h1>{this.state.count}</h1>
          <div className="btn-action">
            <Button
              text="-"
              onClick={this.handleDec}
              disabled={this.state.count <= 0 ? true : false}
            />
            <Button text="Reset" onClick={this.handleReset} />
            <Button
              text="+"
              onClick={this.handleInc}
              disabled={this.state.count >= this.state.maxValue ? true : false}
            />
          </div>
        </div>
        <div className="counter-value">
          <Input
            placeholder="max value.."
            onChange={this.handleMaxValue}
            labelText="Maximal Value"
            value={this.state.maxValue}
          />
          <Input
            placeholder="min value.."
            onChange={this.handleMinValue}
            labelText="Minimal Value"
            value={this.state.minValue}
          />
          <Input
            placeholder="1"
            onChange={this.handleAddBy}
            labelText="Step"
            value={this.state.step}
          />
        </div>
      </div>
    );
  }
}

export default App;
