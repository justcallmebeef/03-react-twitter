import React, { Component } from 'react';
import MessageList from './MessageList';
import './App.css';

const MessageInput = ({ handleInput, newMessageText, submitMessage }) => {
  return (
    <div>
      <input
        onChange={handleInput}
        value={newMessageText}
        type="text"
        placeholder="Message"
      />
      <button onClick={submitMessage}>Submit</button>
    </div>
  )
}

class App extends Component {
  state = {
    messages: [],
    newMessageText: ''
  };

  componentDidMount() {
    fetch('/api/messages')
      .then(stream => stream.json())
      .then(res => this.setState(
        { messages: res.messages },
        () => console.log(this.state)
      ));
  }

  handleInput = ({ target }) => {
    this.setState({ newMessageText: target.value });
  }

  submitMessage = () => {
    const messages = this.state.messages;
    const newMessage = {
      messages_id: messages.length + 1,
      handle: 'iStrouse',
      text: this.state.newMessageText,
      stars: 0,
      timestamp: Date.now()
    }
    messages.unshift(newMessage);

    this.setState({
      messages: messages,
      newMessageText: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Twitter</h1>
        <MessageInput
          handleInput={this.handleInput}
          newMessageText={this.state.newMessageText}
          submitMessage={this.submitMessage}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
