import React, { Component } from 'react';
import Header from './header';
import Content from './content';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="dashboard">
        <Header />
        <div className="container-fluid">
          <Content />
        </div>
      </div>
    );
  }
}

export default Home;
