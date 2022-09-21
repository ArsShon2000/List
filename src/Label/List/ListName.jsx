import React from "react";


const ListName = (props) => {
  let renderElement= () => {
    if(props.id_name === props.wIdNAme)
       return (<div>
       <div>{props.number}&nbsp; </div>
       </div>)
 }

      return (
        <view className="">
            {renderElement()}
          </view>
      )
  }
  
  
  export default ListName