import React from "react";
import stylist from "./List.module.css"
import List from "./List";
import axios from "axios";


const FirstList = (props) => {

    let names = props.names
    let determinant = props.determinant
    let whiteList = props.whiteList 

    return (
        <div className={stylist.name} >


            {props.namesNoSort.map((w) => {
                    return (
                        <List determinant={determinant}
                            names={names}
                            id_name={w}
                            whiteList={whiteList}
                        />
                    )
                })}
        </div>
    )

}

export default FirstList;