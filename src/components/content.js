import React, { Component } from 'react';
import Video from './video';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="main-content">
        <Video />
      </div>
    );
  }
}

export default Content;