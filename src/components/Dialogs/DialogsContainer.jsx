import React from 'react';
import {connect} from "react-redux"
import { addMessageActionCreator, updateNewMessageText } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) =>{
            dispatch(updateNewMessageText(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;