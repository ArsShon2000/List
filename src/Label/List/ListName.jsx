import React from "react";


const ListName = (props) => {
  let renderElement= () => {
    let id_name = props.id_name
    let wIdNAme = props.wIdNAme
    if(id_name === wIdNAme)
       return (<span>{props.number}&nbsp; </span>)
 }

      return (
        <view className="">
            {renderElement()}
          </view>
      )
  }
  
  
  export default ListName