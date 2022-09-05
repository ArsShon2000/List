import React from "react";
import { NavLink } from "react-router-dom";
import sty from "./Navbar.module.css"
import Login from './../Login/Login';


const Navbar = () => {
    // let isAuth = props.isAuth
    // if (isAuth != true ) {
    //     return <Login />
    // }

    let exit = () => {
        // return isAuth = false
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
                <NavLink to="/login" className={({ isActive }) =>
      isActive ? sty.active : undefined}>Выход</NavLink>
            </div>
        </nav>
    )
}


export default Navbar