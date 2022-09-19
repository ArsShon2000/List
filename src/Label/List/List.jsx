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
  // let whiteList = props.whiteList

  
  let [title, setTitle] = useState('');
  const [whiteList, setWhiteList] = useState([]);

  
  // удаление имени из таб wNum
  let onDelName = () => {
    instance.delete(`/wNum/id/${id_name}`).then((res) => {
      setWhiteList(whiteList.filter((e) => {
        console.log(e.id_name + "-----------------------------------")
        return e.id_name !== id_name
      }))
      console.log(id_name + " owner is deleted in whiteNameList");
    })
  }
  let onAddName = () => {
    //добавление номеров в вайтлистнам
    if (props.determinant === "white") {
      if (title !== '') {
        instance.post('/wNumWithId', {
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

  const onNameClick = () => {
    titleOwner = 
    return 
  }



  return (
    <view className={stylist.name} >
      {/* выводится имя */}
      <span onClick={onNameClick}>{props.names}</span>&nbsp;&nbsp;&nbsp;


         {props.whiteList.map((n) => {
          return <ListName id_name={id_name}
            number={n.car_number}
            wIdNAme={n.id_name}
          />
        })}
        
        {/* выводится номера  */}

        <input
          type="text"
          value={title} onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder="Номер машины"
        />
        <button onClick={onAddName}>Добавить</button>
        <button onClick={onDelName}>Удалить</button>  
        <br></br>

    </view>
  )
}


export default List