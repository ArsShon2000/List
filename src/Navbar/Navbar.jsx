import React from "react";
import { NavLink } from "react-router-dom";
import sty from "./Navbar.module.css"
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';
import App from './../App';
import Login from "../Login/Login";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})


const Navbar = () => {
  
    const [loginList, setLoginList] = useState([]);

  useEffect(() => {
    instance.get(`/login`).then((res) => {
        setLoginList(res.data.login);
    })
}, []);


    let logOut = () => {
        let bool = 1
        instance.delete(`/login/${bool}`).then((res) => {
            setLoginList(loginList.filter((e) => {
                return e.name !== bool
            }))
            console.log(res + "name is deleted in loginList");
            
        })
        Location.reload()
    }


    return (
        <nav className={sty.nav}>
            <div className={sty.item}>
                <NavLink to="/wlist" className={({ isActive }) =>
      isActive ? sty.active : undefined}>Белый список</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/blist" className={({ isActive }) =>
      isActive ? sty.active : undefined}>Черный список</NavLink>
            </div>
            <div className={sty.item}>
                <NavLink to="/options" className={({ isActive }) =>
      isActive ? sty.active : undefined}>Настройки</NavLink>
            </div>
            <div className={sty.item}>
                {/* <NavLink to="/login" className={({ isActive }) =>
      isActive ? sty.active : undefined}
      onClick={logOut}>Выход</NavLink> */}
      
      <NavLink to="/" onClick={logOut}>Выход</NavLink>
            </div>
        </nav>
    )
}


export default Navbar