import React from "react";
import { NavLink } from "react-router-dom";
import sty from "./Navbar.module.css"
import Login from './../Login/Login';


const Navbar = (props) => {
    // let isAuth = props.isAuth
    // if (isAuth != true ) {
    //     return <Login />
    // }

    let exit = () => {
        // return isAuth = false
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
                    <NavLink to="/login" activeClassName={sty.active} onClick= {exit} >Выход</NavLink>
                </div>
                {/* <br></br> */}
            </nav>
        </header>
    )
}


export default Navbar