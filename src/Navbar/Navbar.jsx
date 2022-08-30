import React from "react";
import { NavLink } from "react-router-dom";
import sty from "./Navbar.module.css"
import Login from './../Login/Login';


const Navbar = (props) => {
    debugger
    let isAuth = props.isAuth
    if (isAuth != false ) {
        return <Login />
    }
    return (
        <header className={sty.header}>
            <nav className={sty.nav}>
                {/* <br></br> */}
                <div className={sty.item}>
                    <NavLink to="/wlist" activeClassName={sty.active}>Белый список</NavLink>
                </div>
                <div className={sty.item}>
                    <NavLink to="/blist" activeClassName={sty.active}>Черный список</NavLink>
                </div>
                <div className={sty.item}>
                    <NavLink to="/options" activeClassName={sty.active}>Настройки</NavLink>
                </div>
                <div className={sty.item}>
                    <NavLink to="/logout" activeClassName={sty.active}>Выход</NavLink>
                </div>
                {/* <br></br> */}
            </nav>
        </header>
    )
}


export default Navbar