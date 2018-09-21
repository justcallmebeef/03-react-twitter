import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProfileAvatar from './ProfileAvatar';

import './Profile.css';


class Profile extends Component {
  state = {
    avatar: 'https://via.placeholder.com/150x150',
    name: 'Paul',
    handle: '@jack',
    message_count: '200',
    star_count: '73',
    bio: 'Front end dev located in Denver',
    location: 'Denver, CO',
    link: 'github.com/git',
    birth_date: '03/02/1999'
  }



  render() {
    return (
      <div className="ProfileContainer">
        <div className="ProfileHeader">
        <ProfileAvatar image={this.state.avatar} />
          <h1
            data-handle={this.state.handle}
            className="handle">{this.state.name}</h1>
          <ul className="InfoList">
            <li>messages: {this.state.message_count}</li>
            <li>likes: {this.state.star_count}</li>
          </ul>
        </div>
        <div className="InfoContainer">
          <p>
            {this.state.bio}
          </p>
          <ul className="InfoList">
            <li>{this.state.location}</li>
            <li>{this.state.link}</li>
            <li>{this.state.birth_date}</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Profile;
