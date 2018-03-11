import React, { Component } from 'react';
import AppContainer from  './AppContainer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <AppContainer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
