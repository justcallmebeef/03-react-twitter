import React from 'react'

const ProfileAvatar = props => {
  return (
    <div style={{
      border: '2px solid #333',
      borderRadius: '50px',
      backgroundImage: 'url(' + props.image + ')',
      backgroundRepeat: 'no-repeat',
      height: '150px',
      width: '170px'
    }}>
    </div>
  )
}

export default ProfileAvatar;

