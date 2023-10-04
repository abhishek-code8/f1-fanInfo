import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr style={{
        color: "black",
        margin: "0px"
      }}/>
      <MainPage />
    </div>
  );
}

export default App;
