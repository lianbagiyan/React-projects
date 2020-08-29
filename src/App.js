import React, { Component } from "react";
import "./App.css";
//import Button from '@material-ui/core/Button';
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      step: 1,
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
    this.setState(() => ({
      count: 0,
    }));
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
    return (
      <div className="container">
        <h3 className="title">My first project in React. Hope you like it!</h3>
        <div className="counter-body">
          <h1>{this.state.count}</h1>
          <div className="btn-action">
            <Button text="-" onClick={this.handleDec} />
            <Button text="Reset" onClick={this.handleReset} />
            <Button text="+" onClick={this.handleInc} />
          </div>
        </div>
        <div className="counter-value">
          <label className='title-input'>Maximal Value</label>
          <Input type='number' placeholder="max value.." />
          <label className='title-input'>Minimal Value</label>
          <Input type='number' placeholder="min value.." />
          <label className='title-input'>Step</label>
          <Input type="number" placeholder="1" onChange={this.handleAddBy} />
        </div>
      </div>
    );
  }
}

export default App;
