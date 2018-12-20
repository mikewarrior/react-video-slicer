import React, { Component } from 'react';
import VideoWrapper from './video-wrapper';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="main-content">
        <VideoWrapper/>
      </div>
    );
  }
}

export default Content;