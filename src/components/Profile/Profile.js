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
      <div style={{
        backgroundColor: "#fff",
        boxShadow: '1px 2px 0 #333',
        width: '600px',
        height: '165px',
        padding: '20px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
        <ProfileAvatar image={this.state.avatar}/>
        <div style={{
          display: 'flex'
        }}>
        <h1 
          data-handle={this.state.handle}
          className="handle">{this.state.name}</h1>
          <ul style={{
            listStyleType: 'none',
            display: 'flex'
          }}>
            <li>messages: {this.state.message_count}</li>
            <li>likes: {this.state.star_count}</li>
          </ul>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',

        }}>
          <p>
          {this.state.bio}
          </p>
          <ul style={{
            listStyleType: 'none',
            display: 'flex'
          }}>
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
