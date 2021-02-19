import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageText} from '../../redux/dialogs-reducer'


const Dialogs = (props) => {

    

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id} img={message.img} />);
    let newMessageText = props.dialogsPage.newMessageText;

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageText(text) );
    }
    
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                <textarea onChange={onMessageChange} placeholder='Enter your message' value={newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}>Send Message</button>
            </div>

        </div>
    </div>
}

export default Dialogs;