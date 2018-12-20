import React, { Component } from 'react';


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderSourceVideo = () => {
    let timeframe = this.props.timeframe;
    if (timeframe !== '') {
      return (
        <video id="player" height="540px" width="720px" src={`/videos/example.mp4#t=${this.props.timeframe}`}
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
          controls autoPlay />
      );
    }
    return (
      <video id="player" height="540px" width="720px" controls
        src="/videos/example.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
    );
  }

  render() {
    return this.renderSourceVideo();
  }
}

export default Video;