import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id:1, content: 'Привет мир1', isLike: true, likeCount: 5, commentCount: 3, sharesCount: 1},
                {id:2, content: 'Привет мир2', isLike: false, likeCount: 10, commentCount: 0, sharesCount: 5},
                {id:3, content: 'Привет мир3', isLike: true, likeCount: 4, commentCount: 2, sharesCount: 3}
            ],
            newPostText: '',
        },
        dialogs: {
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
    },
    _getState() {
        return this._state;
    },

    _callSubscriber() {
        //Тут будет наблюдатель observer при первом вызове из index.js, придет как callback
    },
    subscribe(observer) {
        this._callSubscriber = observer; //Наблюдатель
    },
    dispatch(action){
        //Получаем новый state через reducer, который принимает актуальный state и action
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        //Перерисовываем
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;