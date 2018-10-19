import React, { Component } from 'react';
import Navigation from './Navigation';
import './Profile/Account.css'

const Account = (props) => {
  return (
    <div className="account">
      <h1>Account</h1>
      <label>Username</label>
      <input></input> <br/>
      <label>Email</label>
      <input></input> <br/>
      <button className="btn">Save Changes</button>
    </div>
  )
}
export default Account;
