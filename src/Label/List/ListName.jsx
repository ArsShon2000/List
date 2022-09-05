import React from "react";


const ListName = (props) => {
  let renderElement= () => {
    let idNAme = props.idNAme
    let wIdNAme = props.wIdNAme
    if(idNAme === wIdNAme)
       return (<span>{props.number}&nbsp; </span>)
 }

      return (
        <view className="">
            {renderElement()}
          </view>
      )
  }
  
  
  export default ListName