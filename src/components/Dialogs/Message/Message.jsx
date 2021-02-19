import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

   

    return <div className={s.message}>
        <div>
            {props.img}
        </div>
        {props.message}
    </div>
    
}


export default Message;