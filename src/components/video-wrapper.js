import React, { Component } from 'react';
import Video from './video';
import PlaylistQueue from './playlist-queue';


class VideoWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeframe: '',
      videoIndex: 0
    }
  }

  onClick = (event) => {
    const timeframe = event.target.getAttribute("name");
    const videoIndex = event.target.id;
    this.setState({ timeframe, videoIndex });
  }

  render() {
    const { timeframe, videoIndex } = this.state;
    return (
      <div>
        <Video timeframe={timeframe} />
        <PlaylistQueue onClick={this.onClick} videoIndex={videoIndex} />
      </div>
    );
  }
}

export default VideoWrapper;