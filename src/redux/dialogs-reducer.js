const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Sveta', img: <img src="https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png" alt="" /> },
        { id: 2, name: 'Andriy', img: <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="" /> },
        { id: 3, name: 'Nastya', img: <img src="https://i.pinimg.com/originals/64/a8/8f/64a88f80d6b5a43b58d14c20c7ef4b89.jpg" alt="" /> },
        { id: 4, name: 'Alina', img: <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg" alt="" /> },
        { id: 5, name: 'Ira', img: <img src="https://pm1.narvii.com/6805/09a1ecaf3a8662e0fb7d482e13d9b865088486f2v2_hq.jpg" alt="" /> },
        { id: 6, name: 'Ivan', img: <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rko98nTyfXyYoJeCuUJ3QuJ6aKTM5SRkZCeTgDn6uOyic" alt="" /> },
    ],
    messages: [
        { id: 1, message: 'Hi', img: <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="" /> },
        { id: 2, message: 'Hello', img: <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="" /> },
        { id: 3, message: 'How is your project?', img: <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="" /> },
        { id: 4, message: 'Not bad', img: <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="" /> },
        { id: 5, message: 'Did you do everything?', img: <img src="https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="" /> },
        { id: 6, message: 'Yes', img: <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="" /> },

    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                name: 'Sveta',
                img: <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="" />,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
            // stateCopy.messages = [...state.messages, newMessage];
            // // stateCopy.messages.push(newMessage);
            // stateCopy.newMessageText = '';
            // return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText: action.newSms,
            };
            // stateCopy.newMessageText = action.newSms;
            // return stateCopy;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = () => {
    return {
        type: 'ADD_MESSAGE'
    }
}

export const updateNewMessageText = (text) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newSms: text
    }
}

export default dialogsReducer;