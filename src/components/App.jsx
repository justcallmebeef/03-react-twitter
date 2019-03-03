import React, { Component } from 'react';
import TweetInputBox from './TweetInputBox';
import './App.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import { connect } from 'react-redux'

export class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Twitter</h1>
        {!this.props.user.id && <p>Login to React Boulder Twitter to post your thoughts!</p>}
        {this.props.user.id && <TweetInputBox />}
        {this.props.user.id && <Profile />
        }
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App);
