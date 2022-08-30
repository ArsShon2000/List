import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header'
import VideoBar from './Videobar/VideoBar.jsx'
import GenCarNumber from './GenCarNum/GenCarNumber';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import WList from './Label/Lists/WList';
import Label from './Label/Label';
import BList from './Label/Lists/BList';


let App = (props) => {

  debugger
  let isAuth = props.isAuth
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <VideoBar />
        <GenCarNumber />
        <Navbar isAuth = {isAuth}/>
        <div className="App-wrapper-content ">
          <Routes>
            <Route path='/wlist' element={<WList />} />
            <Route path='/blist' element={<BList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;