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
      videoName: '',
      startTime: '',
      endTime: '',
      isUpdate: false,
      selectedVideo: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.videoIndex !== this.props.videoIndex) {
      this.setState({ videoIndex: this.props.videoIndex })
    }
  }

  addNewClip = () => {
    let state = this.state;
    state.videoName = '';
    state.startTime = '';
    state.endTime = '';
    state.isUpdate = false;
    state.selectedVideo = '';
    state.openModal = true;
    this.setState(state);
  }

  onCloseModal = () => {
    this.setState({ openModal: false });
  }

  onChange = (event) => {
    let state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  saveVideo = (event) => {
    event.preventDefault();
    let state = this.state;
    const newVideo = {
      name: state.videoName,
      startTime: state.startTime,
      endTime: state.endTime
    }
    if (!state.isUpdate) {
      state.clips.push(newVideo);
    } else {
      state.clips[parseInt(state.selectedVideo, 10)] = newVideo;
    }
    this.setState(state, () => {
      this.onCloseModal();
    });
  }

  onEditVideo = (event) => {
    event.preventDefault();
    let state = this.state;
    state.isUpdate = true;
    state.openModal = true;
    const videoToEdit = state.clips[parseInt(event.target.name, 10)];
    state.videoName = videoToEdit.name;
    state.startTime = videoToEdit.startTime;
    state.endTime = videoToEdit.endTime;
    state.selectedVideo = event.target.name;
    this.setState(state);
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
              onClick={this.onEditVideo}
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
                  name="videoName"
                  className="form-control"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.videoName}
                  required
                />
              </div>
              <div className="col-xs-10">
                <input
                  placeholder="Start time in seconds"
                  name="startTime"
                  className="form-control"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.startTime}
                  required
                />
              </div>
              <div className="col-xs-10">
                <input
                  placeholder="End time in seconds"
                  name="endTime"
                  className="form-control"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.endTime}
                  required
                />
              </div>
              <button className="btn btn-green" id="save_template_btn" onClick={this.saveVideo} type="submit" style={{ marginTop: '8px' }} >Add Clip</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PlaylistQueue;