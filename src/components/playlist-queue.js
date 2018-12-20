import React, { Component } from 'react';


class PlaylistQueue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clips: [
        { name: 'Full Video' },
        { name: 'Beginning', startTime: 0, endTime: 10 },
        { name: 'Middle', startTime: 20, endTime: 30 },
        { name: 'Ending', startTime: 40, endTime: 50 }
      ],
      videoIndex: this.props.videoIndex || 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.videoIndex !== this.props.videoIndex) {
      this.setState({videoIndex: this.props.videoIndex})
    }
  }

  renderPlaylistClips = () => {
    const clips = this.state.clips || [];
    return clips.map((clip, index) => {
      return (
        <span key={index}
          id={index}
          className={`collection-item ${clips[this.state.videoIndex] === clip ? 'active' : ''}`}
          name={clip.startTime !== undefined ? `${clip.startTime},${clip.endTime}` : ''}
          onClick={this.props.onClick}
        >{clip.name}{clip.startTime !== undefined ? ` - ${clip.startTime} s  to ${clip.endTime} s` : ''}</span>
      );
    });
  }

  render() {
    return (
      <div className="playlist-queue" >
        <div id="playlist" className="collection">
          {this.renderPlaylistClips()}
        </div>
      </div>
    );
  }
}

export default PlaylistQueue;