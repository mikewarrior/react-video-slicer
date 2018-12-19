import React, { Component } from 'react';


class PlaylistQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div className="playlist-queue" >
        <ul id="playlist">
          <li id="full-video"> Full Video</li>
        </ul>
      </div>
     );
  }
}

export default PlaylistQueue;