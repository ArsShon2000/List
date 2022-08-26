import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header'
import VideoBar from './Videobar/VideoBar.jsx'
import Label from './Label/Label'


let App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <VideoBar />
        <Label />
      </div>
    </BrowserRouter>
  );
}

export default App;