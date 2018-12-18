import React, { Component } from 'react';


class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <video id="player" height="540px"  width="720px" controls>
        <source src="/videos/example.mp4"
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
     );
  }
}

export default Video;