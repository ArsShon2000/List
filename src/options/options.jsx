import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from './../Login/Login';



const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})

const Options = () => {




    let butName = 'Соеденить'

    let [Ip, setIp] = useState('');
    let [Port, setPort] = useState('');

    let onConnect = () => {
        alert('Connected')
        
    }

    let onTap = () => {
        butName = 'Разъеденить'
    } 


    return (
        <form>
            <div>
                <input
                    type="text"
                    value={Ip} onChange={(e) => setIp(e.currentTarget.value)}
                    placeholder={"IP"} />
            </div>
            <div>
                <input
                    type="text"
                    value={Port} onChange={(e) => setPort(e.currentTarget.value)}
                    placeholder={"Port"} />
            </div>
            <button onClick={onConnect} onChange={onTap} >{butName}</button>
        </form>
        
    )
}

export default Options