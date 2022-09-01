import React from "react";
import stylist from "./List.module.css"
import ListName from "./ListName";
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const List = (props) => {
  debugger
  let isTap = false
  let onNameNum = () => {
    isTap = true
  }

  return (
    <div className={stylist.name}>
      <span onClick={onNameNum}>{props.names}</span>&nbsp;&nbsp;&nbsp;
      <span>{props.number}</span>
      {/* {props.whiteList.map((n) => {
        return <ListName number={n.car_number} />
      })} */}
    </div>
  )
}


export default List