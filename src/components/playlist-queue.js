import React, { Component } from 'react';
import Modal from 'react-responsive-modal';


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
      videoIndex: this.props.videoIndex || 0,
      openModal: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.videoIndex !== this.props.videoIndex) {
      this.setState({ videoIndex: this.props.videoIndex })
    }
  }

  addNewClip = () => {
    this.setState({ openModal: true });
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
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
        <h3 style={{ textAlign: 'center', color: 'black', font: 'status-bar' }} >All your Videos</h3>
        <button title="Add Clip" className="btn-add" onClick={this.addNewClip} />
        <div id="playlist" className="collection">
          {this.renderPlaylistClips()}
        </div>
        <Modal styles={{ modal: { width: '400px' } }} open={this.state.openModal} onClose={this.onCloseModal} center>
          <div className="modal-header" >
            <h4 className="modal-title edit" id="myModalLabel">Add new clip</h4>
          </div>
          <div className="modal-body">
            <form className="form-horizontal">
              <div className="col-xs-10">
                <input
                  placeholder="Name your clip"
                  name="Name"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-xs-10">
                <input
                  placeholder="Start time in seconds"
                  name="Name"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col-xs-10">
                <input
                  placeholder="End time in seconds"
                  name="Name"
                  className="form-control"
                  type="text"
                />
              </div>
              <button className="btn btn-green" id="save_template_btn" onClick={this.onClickSaveButton} type="button" style={{marginTop: '8px'}} >Add Clip</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PlaylistQueue;