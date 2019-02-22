import React, { Component } from "react";
import "./Account.css";

class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: ""
    };
  }

  render() {
    const { password, confirmPassword } = this.state;
    return (
      <div
        className="account"
        onChange={event =>
          this.setState({ [event.target.name]: event.target.value })
        }
      >
        <label className="title">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
        />
        <label className="title">Confirm Password</label>
        <input
          type="password"
          className="input"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        {password !== confirmPassword && "Password don't match"}
        <br />
      </div>
    );
  }
}
export default EditPassword;
