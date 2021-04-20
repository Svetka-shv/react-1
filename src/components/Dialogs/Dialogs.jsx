import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage;
    

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} key={message.id} img={message.img} />);
    let newMessageText = state.newMessageText;

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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