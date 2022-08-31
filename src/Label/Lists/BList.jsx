import React, { useEffect, useState } from "react";
import List from "../List/List";
import stylab from "./BList.module.css"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})

const BList = (props) => {

    // instance.post('/create-db-b', () => {}) 

    let [title2, setTitle2] = useState('');
    let [titleName, setTitleName] = useState('');
    let [titleForDel, setTitleForDel] = useState('');
    const [blackList, setBlackList] = useState([]);


    useEffect(() => {
        instance.get('/bNum').then((res, next) => {
            setBlackList(res.data.bNum);
        })
    }, []);




    let onAddName2 = () => {
        instance.post('/bNum', {
            carNumber: title2,
            name: titleName
        }).then((res) => {
            setBlackList([...blackList, { car_number: title2, name: titleName  }])
            title2 = ''
            titleName= ''
            console.log(res)
        })
    }

    let onDelName = () => {
        instance.delete(`/bNum/${titleForDel}`).then((res) => {
            setBlackList(blackList.filter((e) => {
                return e.car_number !== titleForDel
            }))
            console.log(res);
        })
    }

    return <div className="black">
        {/* <span>Blacklist</span> */}
        <div>
            <input
                type="text"
                value={title2} onChange={(e) => setTitle2(e.currentTarget.value)}
                placeholder="Номер машины"
            />
            <input
                type="text"
                value={titleName} onChange={(e) => setTitleName(e.currentTarget.value)}
                placeholder="Владелец"
            />
            <button onClick={onAddName2}>Добавить</button>
        </div>
        <br></br>
        <div>
            <input
                type="text"
                value={titleForDel} onChange={(e) => setTitleForDel(e.currentTarget.value)}
                placeholder="Удалить машину"
            />
            <button onClick={onDelName}>Удалить</button>
        </div>
        <div className={stylab.names}>
            {blackList.map((b) => {
                return <List name={b.car_number} />
            })}
        </div>
    </div>
}

export default BList
