import React, { Component } from 'react';
import Event from './Event';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: []
    }
  }

  render(){
    return (
      <div className="container">
        <Event />
      </div>
    )
  }
}

export default App;
