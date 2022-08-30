import React from "react";
import { NavLink } from "react-router-dom";
import sty from "./Header.module.css"


const Header = (props) => {
    return (
    <header className={sty.header}>
        <div className={sty.loginBlock}>
            <NavLink to={'/login'}>LogIn</NavLink>
        </div>
    </header>
    )
}

export default Header