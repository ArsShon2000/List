import React, { useEffect, useState } from "react";
import List from "../List/List";
import stylab from "./BList.module.css"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})

const BList = (props) => {
 

  

    // instance.post('/create-db-bn', () => {}) 
    // instance.post('/create-db-b', () => {}) 

    let determinant = "black"
    let [title, settitle] = useState('');
    let [titleName, setTitleName] = useState('');
    let [titleForDel, setTitleForDel] = useState('');
    let [titleOwner, setTitleOwner] = useState('');
    const [blackList, setBlackList] = useState([]);
    const [blackNameList, setBlackNameList] = useState([]);

    useEffect(() => {
        instance.get('/bNum').then((res) => {
            setBlackList(res.data.bNum);
        })
        instance.get(`/bNames`).then((res) => {
            setBlackNameList(res.data.bNames);
        })
    }, []);


    let onAddName2 = () => {
        console.log(props.determinant)
        //добавление номеров в blacklistnum
        if (title !== '') {
            instance.post('/bNum', {
                carNumber: title,
                name: titleName
            }).then((res) => {
                setBlackList([...blackList, { car_number: title, name: titleName }])
                title = ''
                titleName = ''
                console.log(res + "data is added in blacklist")
            })
        }
        //добавление имен в blacklistname
        if (titleName !== '') {
            instance.post('/bNames', {
                name: titleName
            }).then((res) => {
                setBlackNameList([...blackNameList, { name: titleName }])
                title = ''
                titleName = ''
                console.log(res + "name is added in blacklist");
            })
        }
    }

    // удаление по владельцу
    let onDelName = () => {
        if (titleOwner !== '') {
            instance.delete(`/bNames/${titleOwner}`).then((res) => {
                setBlackNameList(blackNameList.filter((e) => {
                    return e.name !== titleOwner
                }))
                console.log(res + "name is deleted in blacklist");
            })
        }

        //удаление по номеру
        if (titleOwner !== '') {
            instance.delete(`/bNum/${titleForDel}`).then((res) => {
                setBlackList(blackList.filter((e) => {
                    return e.car_number !== titleForDel
                }))
                console.log(res + "data is deleted in blacklist");
            })
        }
    }

   
    return <div className="black">
        {/* <span>Blacklist</span> */}
        <div>
            <input
                type="text"
                value={title} onChange={(e) => settitle(e.currentTarget.value)}
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
            <input
                type="text"
                value={titleOwner} onChange={(e) => setTitleOwner(e.currentTarget.value)}
                placeholder="Удалить владельца"
            />
            <button onClick={onDelName}>Удалить</button>
        </div>
        <div className={stylab.names}>
            {blackNameList.map((b) => {
                return (
                <List determinant = {determinant}
                names={b.name}
                    idNAme={b.id_name}

                    // отправляю в мап второй список (полный)
                    whiteList={blackList} />
                    )
            })}
        </div>
    </div>
}

export default BList
