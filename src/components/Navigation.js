import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';


const style = {
  margin: 12,
};

const Navigation = () => (
  <AppBar
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={<div></div>}
    iconElementRight={
      <div>
        <Link to='/'><FlatButton label="Dashboard" /></Link>
        <Link to='/account'><FlatButton label="Account" /></Link>
        <FlatButton label="Login" />
      </div>}
  />
);

export default Navigation;
