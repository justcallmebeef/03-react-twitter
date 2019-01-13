import React, { Component } from 'react';
import TweetInputBox from './TweetInputBox';
import './App.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      photo: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Twitter</h1>
        <p className="App-intro">
          Check the console...
        </p>
        <Profile />
        <TweetInputBox />
        <Footer />
      </div>
    );
  }
}

export default App;
