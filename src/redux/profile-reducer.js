const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';

//Так называем инициализирующий стейт, т.к. при первом проходе REDUX вызывает наш Reducer, но еще не имеет никакого State, выдаст ошибку
let initialState = {
    posts: [
        {id:1, content: 'Привет мир1', isLike: true, likeCount: 5, commentCount: 3, sharesCount: 1},
        {id:2, content: 'Привет мир2', isLike: false, likeCount: 10, commentCount: 0, sharesCount: 5},
        {id:3, content: 'Привет мир3', isLike: true, likeCount: 4, commentCount: 2, sharesCount: 3}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                content: state.newPostText,
                isLike: action.isLike ? action.isLike : false,
                likeCount: action.likeCount ? action.likeCount : 0,
                commentCount: action.commentCount ? action.commentCount : 0,
                sharesCount: action.shareCount ? action.shareCount : 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type:ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type:UPDATE_NEW_POST_TEXT, text};
}

export default profileReducer;