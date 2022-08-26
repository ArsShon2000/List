import React from "react";
import stylist from "./List.module.css"
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const List = (props) => {
    return (
        <div className={stylist.name}>
          {props.name}
        </div>
    )
}


export default List