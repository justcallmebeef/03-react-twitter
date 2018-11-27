import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import * as messageActions from '../actions/messageActions';

class App extends Component {
  state = {
    message: ''
  }

  handleChangeMessage = (event) => {
    const message = event.target.value;
    return this.setState({ message });
  }

  handleSubmitMessage = () => {
    const message = { text: this.state.message };
    this.props.actions.postMessage(message);
    return this.setState({ message: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>Create React App + Redux</h1>
        <input
          value={this.state.message}
          onChange={this.handleChangeMessage}
        />
        <input
          type="submit"
          onClick={this.handleSubmitMessage}
        />
        {this.props.messages.map((message, i) => <p key={i}>{message.text}</p>)}
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
