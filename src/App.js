import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home   } from './components/Home/Home';
import { Route  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route exact={true} path="/" component={Home} />
        <Footer/>
      </div>
    );
  }
}

export default App;




/*
<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */