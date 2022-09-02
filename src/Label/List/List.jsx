import React, { useState } from "react";
import stylist from "./List.module.css"
import ListName from "./ListName";
import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:5000',
})


const List = (props) => {

  let [title, setTitle] = useState('');
  const [whiteList, setWhiteList] = useState([]);


  let isTap = false
  let onNameNum = () => {
    alert(props.names)
    isTap = true
  }

  let onAddName = () => {
    //добавление номеров в вайтлистнам
    if (props.determinant === "white") {
      if (title !== '') {
        instance.post('/wNum', {
          carNumber: title,
          name: props.names,
          id_name: props.idNAme
        }).then((res) => {
          setWhiteList([...whiteList, { car_number: title, name: props.names, id_name: props.idNAme }])
          title = ''
          console.log(res + "Name is added");
        })
      }
    }

    if (props.determinant === "black") {
      if (title !== '') {
        instance.post('/bNum', {
          carNumber: title,
          name: props.names,
          id_name: props.idNAme
        }).then((res) => {
          setWhiteList([...whiteList, { car_number: title, name: props.names, id_name: props.idNAme }])
          title = ''
          console.log(res + "Name is added");
        })
      }
    }
  }

  let names = props.names
  debugger
  return (
    <div className={stylist.name}>
      {/* выводится имя */}
      <span onClick={onNameNum}>{props.names}</span>&nbsp;&nbsp;&nbsp;


      {/* выводится номера */}
      {props.whiteList.map((n) => {
        return <ListName names={names}
          number={n.car_number}
          wNumName={n.name}
        />
      })}
      <input
        type="text"
        value={title} onChange={(e) => setTitle(e.currentTarget.value)}
        placeholder="Номер машины"
      />
      <button onClick={onAddName}>Добавить</button>
    </div>
  )
}


export default List