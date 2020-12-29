import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from "src/components/ApiTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ApiTest />
      </header>
    </div>
  );
}

export default App;
