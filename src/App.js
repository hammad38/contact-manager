import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="ContactManager"/>
        <div className="container">
          <Contacts/>
        </div>
      </div>
    );
  }
}

export default App;
