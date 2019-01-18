import React from 'react'

const ProfileAvatar = props => {
  return (
    <img
      onClick={props.onClick}
      src={props.image}
      alt='The profile avatar'
      style={{
      border: '2px solid #333',
      borderRadius: '50px',
      height: '150px',
      width: '170px'
    }}/>
  )
}

export default ProfileAvatar;

