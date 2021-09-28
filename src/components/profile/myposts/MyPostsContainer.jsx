import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./Myposts";



function MyPostsContainer(props) {
  //Функция обновления текста в поле ввода добавления нового поста
  let updateNewPostText = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action);
  }
  //Функция добавления поста
  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  }

  return (
    <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.store.getState().profile.posts} currentNewPostText={props.store.getState().profile.newPostText}/>
  );
}

export default MyPostsContainer;
