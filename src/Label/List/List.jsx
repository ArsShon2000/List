import React from "react";
import stylist from "./List.module.css"
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const List = (props) => {
    return (
        <div className={stylist.name}>
          <span>{props.number} </span> &nbsp; 
          <span className={stylist.names}> {props.name}</span>
        </div>
    )
}


export default List