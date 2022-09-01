import React, { useEffect, useState } from "react";
import List from "../List/List";
import stylab from "./WList.module.css"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})

const WList = (props) => {

    // instance.post('/create-db-wn', () => {}) 
    // instance.post('/create-db-w', () => {}) 


    let [title, setTitle] = useState('');
    let [titleName, setTitleName] = useState('');
    let [titleForDel, setTitleForDel] = useState('');
    let [titleOwner, setTitleOwner] = useState('');
    const [whiteList, setWhiteList] = useState([]);

    useEffect(() => {
        instance.get('/wNum').then((res) => {
            setWhiteList(res.data.wNum);
        })
    }, []);


    let onAddName = () => {
        instance.post('/wNum', {
            carNumber: title,
            name: titleName
        }).then((res) => {
            setWhiteList([...whiteList, { car_number: title, name: titleName }])
            title = ''
            titleName = ''
            console.log(res);
        })
        if (titleName !== '') {
            instance.post('/wNames', {
                name: titleName
            }).then((res) => {
                setWhiteList([...whiteList, {name: titleName }])
                console.log(res);
            })
        }
    }

    console.log(whiteList)
    //удаление по номеру
    let onDelName = () => {
        if (titleForDel != '') {
            instance.delete(`/wNum/${titleForDel}`).then((res) => {
                setWhiteList(whiteList.filter((e) => {
                    return e.car_number !== titleForDel
                }))
                console.log(res);
            })
        }
        // удаление по владельцу
        if (titleOwner !== '') {
            instance.delete(`/wNum/${titleOwner}`).then((res) => {
                setWhiteList(whiteList.filter((e) => {
                    return e.name !== titleOwner
                }))
                console.log(res);
            })
        }
    }

    // let isAuth = true
    // if (isAuth === false) {
    //     return <Login />
    // }

    return <div className="white">

        {/* <span>whiteList</span> */}
        <div>
            <input
                type="text"
                value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                placeholder="Номер машины"
            />
            <input
                type="text"
                value={titleName} onChange={(e) => setTitleName(e.currentTarget.value)}
                placeholder="Владелец"
            />
            <button onClick={onAddName}>Добавить</button>
        </div>
        <br>
        </br>
        <div>
            {/* <select size="2" className="select">
                <option value="wqerttyerwyer"></option> */}
                <input
                    type="text"
                    value={titleForDel} onChange={(e) => setTitleForDel(e.currentTarget.value)}
                    placeholder="Удалить машину"
                />

                {/* <option value="wqerttyerwyer"></option> */}
                <input
                    type="text"
                    value={titleOwner} onChange={(e) => setTitleOwner(e.currentTarget.value)}
                    placeholder="Удалить владельца"
                />
            {/* </select> */}
            <button onClick={onDelName}>Удалить</button>

        </div>


        <div className={stylab.names}>
            {whiteList.map((w) => {
                return <List number={w.car_number}
                    names={w.name}
                    whiteList={whiteList} />
            })}
        </div>
    </div>
}

export default WList
