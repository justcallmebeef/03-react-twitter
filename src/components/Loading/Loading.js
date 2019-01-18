import React, { Component } from "react";

import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className='loading-image-container'>
        <div className='spinning-spiral'></div>
        <div className='spinning-birb'></div>
      </div>
    )
  }
}

export default Loading