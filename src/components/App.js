import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/Profile';

class App extends Component {
  componentDidMount() {
    fetch('/api/messages')
      .then(stream => stream.json())
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">React Twitter</h1>
        <p className="App-intro">
          Check the console...
        </p>

      <Profile />
      </div>
    );
  }
}

export default App;
