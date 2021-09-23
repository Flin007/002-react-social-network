let renderEntireTree = () =>{
    //Тут будет наблюдатель observer при первом вызове из index.js, придет как callback
}
let state ={
    profile:{
        posts:[
            {content:'Привет мир1', isLike:'true', likeCount:'5', commentCount:'3', sharesCount:'1'},
            {content:'Привет мир2', isLike:'false', likeCount:'10', commentCount:'0', sharesCount:'5'},
            {content:'Привет мир3', isLike:'true', likeCount:'4', commentCount:'2', sharesCount:'3'}
        ],
        newPostText:'Напишите ваше сообщение',
        createPost: (content,isLike,likeCount,commentCount,shareCount) =>{
            let obj = {content:state.profile.newPostText, isLike:isLike, likeCount:likeCount, commentCount:commentCount, sharesCount:shareCount};
            state.profile.posts.push(obj);
            state.profile.newPostText = '';
            renderEntireTree(state);
        },
        newPostTextareaChange:(string) => {
            state.profile.newPostText = string;
            renderEntireTree(state);
        }
    },
    dialogs:{
        userDialogs:[
            {id:1,name:'Владимир Фетисов'},
            {id:2,name:'Максим Рамазанов'},
            {id:3,name:'Ирина Фролова'},
            {id:4,name:'Иван Свирин'},
            {id:5,name:'Артём Тарасов'},
            {id:6,name:'Кирилл Кудрин'},
            {id:7,name:'Артур Пирожков'}
        ],
        messages:[{text:'Привет'},{text:'Как дела?'},{text:'Чем занимаешься?'}]
    }
}
export default state;

export const subscribe = (observer) => {
    renderEntireTree = observer; //Наблюдатель
}