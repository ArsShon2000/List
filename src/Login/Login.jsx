import React, { useEffect, useState } from "react";
import App from "../App";
import Navbar from "../Navbar/Navbar";











const Login = (props) => {

    let [login, setLog] = useState('');
    let [password, setPass] = useState('');
    let isAuth = false
    let onLogin = () => {
        if(login === 'admin' && password === 'admin'){
                return <Navbar/>
        }
    }
    

    return (<div>
        <h1>login</h1>
        <form>
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
    </div>)
}



export default Login