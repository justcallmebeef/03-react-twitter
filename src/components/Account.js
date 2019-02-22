import React, { Component } from 'react';
import './Account.css'
import ProfileAvatar from './Profile/ProfileAvatar';
import AvatarDialog from './Profile/AvatarDialog';

class Account extends Component {

  constructor() {
    super();
    this.state = {
      avatar: 'https://via.placeholder.com/150x150',
    };
  }

  submitButton = () => {
    alert('Updates Submitted!')
  }

  changeAvatar = (url) => {
    console.log('Changing avatar');
    this.setState({ avatar: url });
  }

  render() {
    return (
    <div className="account">
      <h1>Account</h1>
      <hr/>
      <div className="changeInput">
      <label className="title">Edit Username</label>
      <input className="input" placeholder="bruceWayne"></input> <br/>
      <label className="title">Edit Email</label>
      <input className="input" placeholder="bruceWayne@batcave.com"></input> <br/>
      <ProfileAvatar onClick={this.avatarClicked} image={this.state.avatar} />
      <AvatarDialog changeAvatar={this.changeAvatar} /> <br />
      <button onClick={this.submitButton} className="btn">Save changes</button>
      </div>
    </div>
    )
  }
}
export default Account;
