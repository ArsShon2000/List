import React, { useEffect, useState } from "react";
import stylab from "./GenCarNumber.module.css"
import gosNum from "./gosnomer.png"
import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:5000',
})



const GenCarNumber = (props) => {


    let defLong = 'A777AA'
    let defShort = '777'

    const [genNum, setGenNum] = useState([]);

    useEffect(() => {
        instance.get('/genNum').then((res) => {
            setGenNum(res.data.genNum);
        })
    }, []);

    console.log(typeof(genNum))


    const longArray = []
    const shortArray = []
    // genNum разбиваем на две переменные
    if(genNum.length > 1 && genNum !== ''){
        console.log(genNum.split(''))
        let j = 0
        for(let i = 0; i < genNum.length; i++){
            if(i<6){longArray[i] = genNum[i]}
            if(i>5){                
                shortArray[j] = genNum[i]
                j++
            }
        }
    defLong = longArray.join('') // из массива в стринг
    defShort = shortArray.join('')
    }



    console.log(genNum.length + ' car number')

    
    return (
        <div className={stylab.lab} >
            <div className={stylab.image1}><img src={gosNum} alt="gosNum" /></div>
            <div className={stylab.text2}>
                <span >{defLong}</span>
            </div>
            <div className={stylab.text3}>
                <span >{defShort}</span>
            </div>
            
        </div>
    )
}

export default GenCarNumber