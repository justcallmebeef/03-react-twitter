
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UploadPhoto extends Component {
  handleLoadPhoto = async (event) => {
    event.preventDefault();
    const reader = new FileReader();
    let file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.props.onImageLoaded(reader.result);
        fetch('api/users/update', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ userId: 1, avatar: reader.result })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Avatar update successful');
        })
      }
    } else {
      alert('File uploaded is not valid.');
    }
  }

  render() {
    return (
      <div>
        <label
          className="upload-file"
          htmlFor="my-upload-btn"
        >
          <input
            id="my-upload-btn"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleLoadPhoto}
          />
        </label>
      </div>
    );
  }
}

UploadPhoto.propTypes = {
    onImageLoaded: PropTypes.func.isRequired,
};

export default UploadPhoto;