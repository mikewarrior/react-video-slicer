import React, { Component } from 'react';


class PlaylistQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clips: [
        { name: 'Full Video' },
        { name: 'Beginning', startTime: 0, endTime: 10 }
      ],
      timeframe: ''
    }
  }

  renderPlaylistClips = () => {
    const clips = this.state.clips || [];

    return clips.map((clip, index) => {
      return (
        <li key={index}
          id={clip.name}
          name={clip.startTime !== undefined ? `${clip.startTime},${clip.endTime}` : ''}
          onClick={this.props.onClick}
        >{clip.name}</li>
      );
    });
  }



  render() {
    return (
      <div className="playlist-queue" >
        <ul id="playlist">
          {this.renderPlaylistClips()}
        </ul>
      </div>
    );
  }
}

export default PlaylistQueue;