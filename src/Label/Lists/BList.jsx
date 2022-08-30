import React, { useEffect, useState } from "react";
import List from "../List/List";
import stylab from "./BList.module.css"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})

const BList = (props) => {

    let [title2, setTitle2] = useState('');
    const [blackList, setBlackList] = useState([]);


    useEffect(() => {
        instance.get('/bNum').then((res) => {
            setBlackList(res.data.bNum);
        })
    }, []);


    let onAddName2 = () => {
        instance.post('/bNum', {
            carNumber: title2,
        }).then((res) => {
            setBlackList([...blackList, { car_number: title2 }])
            title2 = ''
            console.log(res)
        })
    }

    // let isAuth = true
    // if (isAuth === false) {
    //     return <Login />
    // }

    return <div className="black">
        <span>Blacklist</span>
        <div>
            <input
                type="text"
                value={title2} onChange={(e) => setTitle2(e.currentTarget.value)}
                placeholder="Номер машины"
            />
            <button onClick={onAddName2}>Добавить</button>
        </div>
        <div className={stylab.names}>
            {blackList.map((b) => {
                return <List name={b.car_number} />
            })}
        </div>
    </div>
}

export default BList
