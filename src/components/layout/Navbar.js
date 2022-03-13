import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Navbar extends Component {
  // set default title and icon -- in case we forgot to setup props in App.js
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fa-brands fa-github',
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
