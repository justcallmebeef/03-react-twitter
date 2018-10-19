import React, { Component } from 'react'

import './Footer.css';

class Footer extends Component {

  year() {
    var d = new Date();
    var y = d.getFullYear();
    return y;
  }

  render() {
    return (
      <footer className="FooterContainer">
        <p><a href="https://github.com/boulderReactCodingNight">Boulder React Coding Night</a> with Boulder React, Women Who Code, and Bootcampers Collective.</p>
        <p>Boulder Colorado &copy; {this.year()}</p>
      </footer>
    )
  }
};

export default Footer;
