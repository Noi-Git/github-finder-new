import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={icon} /> {title}
      </h1>
    </nav>
  );
};

// set default title and icon -- in case we forgot to setup props in App.js
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa-brands fa-github',
};

export default Navbar;
