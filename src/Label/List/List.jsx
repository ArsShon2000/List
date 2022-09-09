import React, { useEffect, useState } from "react";
import stylist from "./List.module.css"
import ListName from "./ListName";
import axios from "axios";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})


const List = (props) => {

  let id_name = props.id_name

  let [title, setTitle] = useState('');
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



  // удаление имени из таб wNum
  let onDelName = () => {
    instance.delete(`/wNames/${id_name}`).then((res) => {
      setWhiteNameList(whiteNameList.filter((e) => {
        return e.id_name !== id_name
      }))
      console.log(res + "name is deleted in whiteNameList");
    })
  }
  let onAddName = () => {
    //добавление номеров в вайтлистнам
    if (props.determinant === "white") {
      if (title !== '') {
        instance.post('/wNum', {
          carNumber: title,
          name: props.names,
          id_name: props.id_name
        }).then((res) => {
          setWhiteList([...whiteList, { car_number: title, name: props.names, id_name: props.id_name }])
          title = ''
          console.log(res + "Name is added");
        })
      }
    }
    //добавление номеров в blackлистнам
    if (props.determinant === "black") {
      if (title !== '') {
        instance.post('/bNum', {
          carNumber: title,
          name: props.names,
          id_name: props.id_name
        }).then((res) => {
          setWhiteList([...whiteList, { car_number: title, name: props.names, id_name: props.id_name }])
          title = ''
          console.log(res + "Name is added");
        })
      }
    }
  }



  return (
    <div className={stylist.name} >
      {/* выводится имя */}


      {props.names}&nbsp;&nbsp;&nbsp;

        {props.whiteList.map((n) => {
          return <ListName id_name={id_name}
            number={n.car_number}
            wIdNAme={n.id_name}
          />
        })}
        {/* выводится номера */}

        <input
          type="text"
          value={title} onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder="Номер машины"
        />
        <button onClick={onAddName}>Добавить</button>
        <button onClick={onDelName}>Удалить</button>  



    </div>
  )
}


export default List