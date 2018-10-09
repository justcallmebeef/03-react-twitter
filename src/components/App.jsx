import React, { Component } from 'react';
import TweetInputBox from './TweetInputBox';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/messages')
      .then(stream => stream.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Twitter</h1>
        <TweetInputBox />
        <p className="App-intro">
          Check the console...
        </p>
      </div>
    );
  }
}

export default App;
