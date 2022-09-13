import React from "react";


const ListName = (props) => {
  let renderElement= () => {
    if(props.id_name === props.wIdNAme)
       return (<span>{props.number}&nbsp; </span>)
 }

      return (
        <view className="">
            {renderElement()}
          </view>
      )
  }
  
  
  export default ListName