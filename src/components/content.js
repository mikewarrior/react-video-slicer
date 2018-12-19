import React, { Component } from 'react';
import Video from './video';
import PlaylistQueue from './playlist-queue';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="main-content">
        <Video />
        <PlaylistQueue />
      </div>
    );
  }
}

export default Content;