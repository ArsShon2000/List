import React, { useEffect, useState } from "react";
import stylab from "./GenCarNumber.module.css"
import gosNum from "./gosnomer.png"
import longNum from './long.txt';
import shortNum from './short.txt';
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})



const GenCarNumber = (props) => {

    // instance.post('/create-db-long', () => {}) 

    // const [longNum, setGenLong] = useState([]);


    // useEffect(() => {
    //     instance.get('/genNomLong').then((res) => {
    //         setGenLong(res.data.genNomLong);
    //     })
    // }, []);

    let looong = 'A777AA'
    let sh = '777'

    console.log(looong)
    console.log(sh)

    let onGenLong = () => {

    }

    let onGenShort = () => {

    }

    
    return (
        <div className={stylab.lab} >
            <div className={stylab.image1}><img src={gosNum} alt="gosNum" /></div>
            <div className={stylab.text2}>
                <span >{looong}</span>
            </div>
            <div className={stylab.text3}>
                <span >{sh}</span>
            </div>
            
        </div>
    )
}

export default GenCarNumber