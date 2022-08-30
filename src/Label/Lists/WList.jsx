import React, { useEffect, useState } from "react";
import List from "../List/List";
import stylab from "./WList.module.css"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})

const WList = (props) => {
    let [title, setTitle] = useState('');
    const [whiteList, setWhiteList] = useState([]);

    let [titleForDel, setTitleForDel] = useState('');
    const [whiteListForDel, setWhiteListForDel] = useState([]);

    useEffect(() => {
        instance.get('/wNum').then((res) => {
            setWhiteList(res.data.wNum);
        })
    }, []);

    useEffect(() => {
        instance.get('/wNum').then((res) => {
            setWhiteListForDel(res.data.wNum);
        })
    }, []);



    let onAddName = () => {
        instance.post('/wNum', {
            carNumber: title,
        }).then((res) => {
            setWhiteList([...whiteList, { car_number: title }])
            title = ''
            console.log(res);
        })

    }

    console.log(whiteListForDel)
    let onDelName = () => {
        instance.delete(`/wNum/${titleForDel}`).then((res) => {
            setWhiteList(whiteList.filter((e) => {
                return e.car_number !== titleForDel
            }))
            console.log(res);
        })
    }

    // let isAuth = true
    // if (isAuth === false) {
    //     return <Login />
    // }

    return <div className="white">

        <span>whiteList</span>
        <div>
            <input
                type="text"
                value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                placeholder="Номер машины"
            />
            <button onClick={onAddName}>Добавить</button>
        </div>
        <br>
        </br>
        <div>
            <input
                type="text"
                value={titleForDel} onChange={(e) => setTitleForDel(e.currentTarget.value)}
                placeholder="Удалить машину"
            />
            <button onClick={onDelName}>Удалить</button>
        </div>

        <div className={stylab.names}>
            {whiteList.map((w) => {
                return <List name={w.car_number} />
            })}
        </div>
    </div>
}

export default WList
