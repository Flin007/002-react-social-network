const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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