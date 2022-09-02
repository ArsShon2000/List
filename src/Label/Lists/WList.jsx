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

    let determinant = "white"
    let [title, setTitle] = useState('');
    let [titleName, setTitleName] = useState('');
    let [titleForDel, setTitleForDel] = useState('');
    let [titleOwner, setTitleOwner] = useState('');
    const [whiteList, setWhiteList] = useState([]);
    const [whiteNameList, setWhiteNameList] = useState([]);

    useEffect(() => {
        instance.get(`/wNum`).then((res) => {
            setWhiteList(res.data.wNum);
        })
        instance.get(`/wNames`).then((res) => {
            setWhiteNameList(res.data.wNames);
        })
    }, []);


    let onAddName = () => {
        //добавление номеров в вайтлистнам
        if (title !== '') {
            instance.post('/wNum', {
                carNumber: title,
                name: titleName
            }).then((res) => {
                setWhiteList([...whiteList, { car_number: title, name: titleName }])
                title = ''
                titleName = ''
                console.log(res + "data is added in whitelist");
            })
        }
        //добавление имен в вайтлистнейм
        if (titleName !== '') {
            instance.post('/wNames', {
                name: titleName
            }).then((res) => {
                setWhiteNameList([...whiteNameList, { name: titleName }])
                title = ''
                titleName = ''
                console.log(res + "name is added in whitelist");
            })
        }
    }

    // console.log(whiteList)
    // удаление по владельцу
    let onDelName = () => {
        if (titleOwner !== '') {
            instance.delete(`/wNames/${titleOwner}`).then((res) => {
                setWhiteNameList(whiteNameList.filter((e) => {
                    return e.name !== titleOwner
                }))
                console.log(res + "name is deleted in whitelist");
            })
        }
        //удаление по номеру
        if (titleForDel !== '') {
            instance.delete(`/wNum/${titleForDel}`).then((res) => {
                setWhiteList(whiteList.filter((e) => {
                    return e.car_number !== titleForDel
                }))
                console.log(res + "data is deleted in whitelist");
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
        <br></br>
        <div>
            <input
                type="text"
                value={titleForDel} onChange={(e) => setTitleForDel(e.currentTarget.value)}
                placeholder="Удалить машину"
            />
            <input
                type="text"
                value={titleOwner} onChange={(e) => setTitleOwner(e.currentTarget.value)}
                placeholder="Удалить владельца"
            />
            <button onClick={onDelName}>Удалить</button>
        </div>
        <div className={stylab.names}>
            {whiteNameList.map((w) => {
                return (
                    <List determinant = {determinant} 
                    names={w.name}
                        idNAme={w.id_name}
                        
                        // отправляю в мап второй список (полный)
                        whiteList={whiteList} />
                        
                )
            })}
        </div>
    </div>
}

export default WList
