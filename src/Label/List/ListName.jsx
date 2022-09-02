import React from "react";


const ListName = (props) => {
  let renderElement= () => {
    let names = props.names
    let wNumName = props.wNumName
    if(names === wNumName)
       return (<span>{props.number}&nbsp; </span>)
 }


      return (
        <view className="">
            {renderElement()}
          </view>
      )
  }
  
  
  export default ListName