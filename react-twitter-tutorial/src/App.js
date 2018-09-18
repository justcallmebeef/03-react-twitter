import React, { Component } from 'react';
import MessageList from './MessageList';
import './App.css';

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    fetch('/api/messages')
      .then(stream => stream.json())
      .then(res => this.setState(
        { messages: res.messages },
        () => console.log(this.state)
      ));
  }

  render() {
    return (
      <div className="App">
        <h1>React Twitter</h1>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
