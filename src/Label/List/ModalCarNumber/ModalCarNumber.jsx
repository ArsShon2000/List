import React, { useState } from "react";
// import mcn from "./ModalCarNumber.module.css"
import "./ModalCarNumber.css"


const ModalCarNumber = ({active, setActive, children}) => {
    let [title, setTitle] = useState('');
    let [titleName, setTitleName] = useState('');
    
    return(
        <div className={active ? "modalDates active" : "modalDates"} onClick={() => setActive(false)}>
            <div className={active ? "modalDates__content active" : "modalDates__content" } onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalCarNumber