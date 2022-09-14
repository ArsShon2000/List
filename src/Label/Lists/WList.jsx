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
    // instance.post('/create-db-wn2', () => {}) 
    // instance.post('/create-db-w', () => {}) 
// опеределяет в какой странице происходит действие
    let determinant = "white"
    
    let [title, setTitle] = useState('');
    let [titleName, setTitleName] = useState('');
    let [titleForDel, setTitleForDel] = useState('');
    let [titleOwner, setTitleOwner] = useState('');
    const [whiteList, setWhiteList] = useState([]);

    useEffect(() => {
        instance.get(`/wNum`).then((res) => {
            setWhiteList(res.data.wNum);
        })
    }, []);


    // let idName = whiteNameList2.length + 1
    let onAddName = () => {
        //добавление имен в вайтлистнейм
        // if (titleName !== '') {
        //     instance.post('/wNames', {
        //         name: titleName
        //     }).then((res) => {
        //         setWhiteNameList([...whiteNameList, { name: titleName }])
        //         console.log(res + "name is added in whiteNamelist");
        //     })
        // }
        //добавление имен в вайтлистнейм2 для id_name
        if (titleName !== '') {
            instance.post('/wNames2', {
                name: titleName
            })
            // .then((res) => {
            //     setWhiteNameList2([...whiteNameList2, { name: titleName }])
            //     console.log(res + "name is added in whiteNamelist2");
            // })
        }

        //добавление номеров в вайтлистнам
        if (title !== '' && titleName !== '') {
            instance.post('/wNum', {
                carNumber: title,
                name: titleName
            }).then((res) => {
                setWhiteList([...whiteList, { name: titleName, car_number: title }])
                console.log(res + "data is added in whitelist");
            })
        }
        Location.reload()
    }
    
    // удаление по владельцу
    let onDelName = () => {
        if (titleForDel !== '') {
            instance.delete(`/wNum/cn/${titleForDel}`).then((res) => {
                setWhiteList(whiteList.filter((e) => {
                    return e.car_number !== titleForDel
                }))
                console.log(res + "data is deleted in whitelist");
            })
        }
    }

    // получаем все айди номера из вайтлиста 
    let namesNoSort = []
    for (let i = 0; i < whiteList.length; i++) {
        namesNoSort[i] = whiteList[i].id_name
    }

    // избавляемся от дулирования
    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
// отсорированные айдишки
    unique(namesNoSort);

// по айди получаем имена водителей
    let names = []
    for (let i = 0; i < unique(namesNoSort).length; i++) {
        for (let j = 0; j < whiteList.length; j++) {
            if (unique(namesNoSort)[i] === whiteList[j].id_name) {
                names[i] = whiteList[j].name
            }
        }
    }


    // let finalWhiteList = [[], []]
    // for (let j = 0; j < unique(namesNoSort).length; j++) {

    //     finalWhiteList['idName'][j] = unique(namesNoSort)[j]
    //     finalWhiteList['sortName'][j] = names[j]
    // }
    // for (let j = 0; j < names.length; j++) {
        
    // }

    let finalWhiteList = unique(namesNoSort).map((idName, sortName) => ({
        idName, sortName: names[sortName]
    }))
    


    return <div className="white">
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

            <div>
                {finalWhiteList.map((w) => {
                    return (
                        <List determinant={determinant}
                            names={w.sortName}
                            id_name={w.idName}
                            whiteList={whiteList}
                        />
                    )
                })}


                
                {/* {unique(namesNoSort).map((w) => {
                    return (
                        <List
                            id_name = {w}
                            whiteList={whiteList}
                            
                        />
                    )
                })} */}
            </div>

            {/* {whiteNameList.map((w) => {
                return (
                    <List determinant={determinant}
                        names={w.name}
                        id_name={w.id_name}
                        // отправляю в мап второй список (полный)
                        whiteList={whiteList} 
                        />
                )
            })} */}
        </div>
    </div>
}

export default WList
