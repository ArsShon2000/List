import React, { useState } from "react";
import "./modal.css"
// import mod from "./modal.module.css"

const ModalForDel = ({active, setActive, children}) => {
    let [title, setTitle] = useState('');
    let [titleName, setTitleName] = useState('');
    
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalForDel