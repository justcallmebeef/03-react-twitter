import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <AppBar
        // iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<div></div>}
        iconElementRight={
          <div className='nav-row'>
            <img src='./white-logo.png' alt='react-twitter logo' className='nav-logo' />
            <Link to='/'>
              <FlatButton label="Dashboard" secondary={this.props.location.pathname === "/"} />
            </Link>
            <Link to='/account'>
              <FlatButton label="Account" secondary={this.props.location.pathname === "/account"} />
            </Link>
            <Link to='/login'>
              <FlatButton label="Login" secondary={this.props.location.pathname === "/login"} />
            </Link>
            <Link to='/register'>
              <FlatButton label="Register" secondary={this.props.location.pathname === "/register"} />
            </Link>
          </div>}
      />
    )
  };
}

export default withRouter(Navigation);
