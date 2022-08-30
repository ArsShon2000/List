import React from "react";
import stylab from "./GenCarNumber.module.css"
import gosNum from "./gosnomer.png"
import longNum from './long.txt';
import shortNum from './short.txt';




const GenCarNumber = (props) => {

    let looong = 'A777AA'
    let sh = '777'

    console.log(looong)
    console.log(sh)

    
    return (
        <div className={stylab.lab} >
            <div className={stylab.image1}><img src={gosNum} alt="gosNum" /></div>
            <div className={stylab.text2}>
                <span>{looong}</span>
            </div>
            <div className={stylab.text3}>
                <span>{sh}</span>
            </div>
        </div>
    )
}

export default GenCarNumber