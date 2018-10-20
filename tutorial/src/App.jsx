import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import './App.css';

const MessageInput = ({ handleInput, newMessageText, submitMessage }) => (
  <div>
    <input
      onChange={handleInput}
      value={newMessageText}
      type="text"
      placeholder="Message"
    />
    <button type="button" onClick={submitMessage}>Submit</button>
  </div>
);

MessageInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  newMessageText: PropTypes.string.isRequired,
  submitMessage: PropTypes.func.isRequired
};

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
    const { messages, newMessageText } = this.state;
    const newMessage = {
      messages_id: messages.length + 1,
      handle: 'iStrouse',
      text: newMessageText,
      stars: 0,
      timestamp: Date.now()
    };
    messages.unshift(newMessage);

    this.setState({
      messages,
      newMessageText: ''
    });
  }

  render() {
    const { messages, newMessageText } = this.state;
    return (
      <div className="App">
        <h1>React Twitter</h1>
        <MessageInput
          handleInput={this.handleInput}
          newMessageText={newMessageText}
          submitMessage={this.submitMessage}
        />
        <MessageList messages={messages} />
      </div>
    );
  }
}

export default App;
