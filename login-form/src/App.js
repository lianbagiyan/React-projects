import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className=''
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className=''
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=''
                placeholder="Email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className=''
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
