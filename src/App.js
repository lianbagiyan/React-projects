import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    }
  }

  render() {
    return (
    <div className='container'>
      <h3 className='title'>My first project. Hope you like it!</h3>
      <div className='counter-body'>
        <span>0</span>
        <div className='btn-action'>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className='counter-value'>

      </div>
    </div>
    )
  }
}

export default App;
