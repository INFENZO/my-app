import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Animal } from './animal';

function App() {
  const animal = new Animal();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Animal: {animal.saySomething()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
