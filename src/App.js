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
import Options from './options/options';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

debugger

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})

let App = (props) => {

  const [loginList, setLoginList] = useState([]);
let bool = loginList.length

 
  useEffect(() => {
    instance.get(`/login`).then((res) => {
        setLoginList(res.data.login);
    })
}, []);


const refresh = () =>{
  return 
}
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <VideoBar />
        <GenCarNumber />
        {bool != 1 ? <Login /> : 
        <Navbar />  }
        <div className="App-wrapper-content ">
        {bool != 1 ? refresh() : <Routes>
            <Route path='/wlist' element={<WList />} />
            <Route path='/blist' element={<BList />} />
            <Route path='/options' element={<Options />} />
            {/* <Route path='/login' element={<Login />} /> */}
          </Routes>
          }
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;