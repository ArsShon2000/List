import React, { useEffect, useState } from "react";
import App from "../App";
import Navbar from "../Navbar/Navbar";


const LoginForm = (props) => {


let [login, setLog] = useState('');
let [password, setPass] = useState('');
debugger
let isAuth = false
let l_admin = 'admin'
let p_admin = 'admin'
let onLogin = () => {
    //if(login === l_admin && password === p_admin){
            return <App isAuth = {true}/>
    //}
}


    return <form>
        <div>
            <input 
             type="text"
             value={login} onChange={(e) => setLog(e.currentTarget.value)}
            placeholder={"Login"} />
        </div>
        <div>
            <input
            type="text"
            value={password} onChange={(e) => setPass(e.currentTarget.value)} 
            placeholder={"Password"} />
        </div>
        <div>
            <input type={"checkbox"} /> remember me
        </div>
        <div>
            <button onClick={onLogin}>Log In</button>
        </div>
    </form>
}


const Login = (props) => {
    return <div>
        <h1>login</h1>
        <LoginForm />
    </div>
}


export default Login