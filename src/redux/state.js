const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';


//Check changes from another computer

let store = {
    _state: {
        profile: {
            posts: [
                {id:1, content: 'Привет мир1', isLike: true, likeCount: 5, commentCount: 3, sharesCount: 1},
                {id:2, content: 'Привет мир2', isLike: false, likeCount: 10, commentCount: 0, sharesCount: 5},
                {id:3, content: 'Привет мир3', isLike: true, likeCount: 4, commentCount: 2, sharesCount: 3}
            ],
            newPostText: 'Напишите ваше сообщение',
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
            messages: [{text: 'Привет'}, {text: 'Как дела?'}, {text: 'Чем занимаешься?'}]
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

    createPost(id, content, isLike, likeCount = 4, commentCount, shareCount = 0) {
        let post ={
            content: this._state.profile.newPostText,
            isLike: isLike,
            likeCount: likeCount,
            commentCount: commentCount,
            sharesCount: shareCount
        }
        this._state.profile.posts.push(post);
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },
    createPostTextareaChange(string){
        this._state.profile.newPostText = string;
        this._callSubscriber(this._state);
    },
    dispatch(action,data){ //Принимает объект со свойством type, например 'ADD-POST' в string формате
        if (action.type === ADD_POST){
            let post ={
                content: this._state.profile.newPostText,
                isLike: action.isLike ? action.isLike : false,
                likeCount: action.likeCount ? action.likeCount : 0,
                commentCount: action.commentCount ? action.commentCount : 0,
                sharesCount: action.shareCount ? action.shareCount : 0
            }
            this._state.profile.posts.push(post);
            this._state.profile.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profile.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {type:ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type:UPDATE_NEW_POST_TEXT, text}
}

export default store;

window.store = store;