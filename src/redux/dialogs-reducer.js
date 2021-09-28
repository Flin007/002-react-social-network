const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

//Так называем инициализирующий стейт, т.к. при первом проходе REDUX вызывает наш Reducer, но еще не имеет никакого State, выдаст ошибку
let initialState = {
    userDialogs: [
        {id: 1, name: 'Владимир Фетисов'},
        {id: 2, name: 'Максим Рамазанов'},
        {id: 3, name: 'Ирина Фролова'},
        {id: 4, name: 'Иван Свирин'},
        {id: 5, name: 'Артём Тарасов'},
        {id: 6, name: 'Кирилл Кудрин'},
        {id: 7, name: 'Артур Пирожков'}
    ],
    messages: [{text: 'Привет'}, {text: 'Как дела?'}, {text: 'Чем занимаешься?'}],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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