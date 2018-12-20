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
      this.setState({ videoIndex: this.props.videoIndex })
    }
  }

  onDeleteVideo = (event) => {
    event.preventDefault();
    let state = this.state;
    let id = event.target.name;
    state.clips.splice(id, 1);
    this.setState({ clips: state.clips });
  }

  renderPlaylistClips = () => {
    const clips = this.state.clips || [];

    return clips.map((clip, index) => {
      if (index === 0) {
        return (
          <span key={index}
            id={index}
            className={`collection-item ${clips[this.state.videoIndex] === clip ? 'active' : ''}`}
            name={clip.startTime !== undefined ? `${clip.startTime},${clip.endTime}` : ''}
            onClick={this.props.onClick}
          >{clip.name}{clip.startTime !== undefined ? ` - ${clip.startTime} s  to ${clip.endTime} s` : ''}</span>
        );
      } else {
        return (
          <span key={index}
            id={index}
            className={`collection-item ${clips[this.state.videoIndex] === clip ? 'active' : ''}`}
            name={clip.startTime !== undefined ? `${clip.startTime},${clip.endTime}` : ''}
            onClick={this.props.onClick}
          >{clip.name}{clip.startTime !== undefined ? ` - ${clip.startTime} s  to ${clip.endTime} s` : ''}
            <button
              title="Edit"
              className="btn-edit"
              name={index}
              type="button"
              onClick={this.onDeleteVideo}
            />
            <button
              title="Delete"
              className="btn-delete"
              name={index}
              type="button"
              onClick={this.onDeleteVideo}
            />
          </span>
        );
      }
    });
  }

  render() {
    return (
      <div className="playlist-queue" >
        <h3>All your Videos</h3>
        <div id="playlist" className="collection">
          {this.renderPlaylistClips()}
        </div>
      </div>
    );
  }
}

export default PlaylistQueue;