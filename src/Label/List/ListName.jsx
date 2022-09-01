import React from "react";
import stylist from "./List.module.css"


const ListName = (props) => {
debugger

      return (
          <div className={stylist.name}>
            <span>{props.number}</span>&nbsp;&nbsp;&nbsp;
          </div>
      )
  }
  
  
  export default ListName