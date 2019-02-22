import React, { Component } from "react";
import EditPassword from "./EditPassword";
import "./Account.css";

class Account extends Component {
  submitButton = () => {
    alert("Updates Submitted!");
  };

  render() {
    return (
      <div className="account">
        <h1>Account</h1>
        <hr />
        <div className="changeInput">
          <label className="title">Edit Username</label>
          <input className="input" placeholder="bruceWayne" /> <br />
          <label className="title">Edit Email</label>
          <input className="input" placeholder="bruceWayne@batcave.com" />{" "}
          <br />
          <EditPassword />
          <button onClick={this.submitButton} className="btn">
            Save changes
          </button>
        </div>
      </div>
    );
  }
}
export default Account;
