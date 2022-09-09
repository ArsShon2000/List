import React, { useState } from "react";
import axios from "axios";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})


const Login = (props) => {

        // instance.post('/create-login', () => {})

  let [login, setLog] = useState('');
  let [password, setPass] = useState('');
  const [loginList, setLoginList] = useState([]);
// проверка на логинизацию

    let onLogin = () => {
        instance.post('/login', {
            login: login,
            password: password
        }).then((res) => {
            setLoginList([...loginList, { login: login, password: password}])                
            console.log(res + "name is added in loginList");
        })
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