const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                text: state.newMessageText
            }
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}


export const updateNewMessageTextActionCreator = (text) => {
    return { type:UPDATE_MESSAGE_TEXT, text };
}
export const sendMessageActionCreator = () => {
    return {type:SEND_MESSAGE};
}

export default dialogsReducer;