import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header';
import Contacts from './components/Contacts';

import {Provider} from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="ContactManager"/>
          <div className="container">
            <Contacts/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
