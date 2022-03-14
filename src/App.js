import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';

library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title="Noi's Github Finder" icon='fa-brands fa-github' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
