import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <header>
        <div className="logo">
          <h1>By Mike</h1>
        </div>
      </header>
    );
  }
}

export default Header;