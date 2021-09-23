import React from 'react';
import profile_img from "./../../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faShareAlt,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import s from "./MyPosts.module.css";
import Post from "./post/Post";



function MyPosts(props) {
  let posts = props.appState.posts.map(p => <Post content={p.content} isLike={p.isLike} likeCount={p.likeCount} commentCount={p.commentCount} sharesCount={p.sharesCount} />);


  let newPostElement = React.createRef();
  let createPost = () => {
    props.appState.createPost(newPostElement.current.value, false, 0, 0, 0);
  }
  let newPostTextareaChange = () => {
    props.appState.newPostTextareaChange(newPostElement.current.value);
  }
  return (
    <div className={s.pageContent}>
      <div className={s.createPost}>
        <div className={s.header}>
          <h4>Создать пост</h4>
        </div>
        <div className={s.body}>
          <div className="row">
            <div className={s.userImg}>
              <img src={profile_img} alt="" />
            </div>
            <form action="">
              <textarea
                ref={newPostElement}
                value={props.appState.newPostText}
                onChange={newPostTextareaChange}
                name=""
                id=""
                cols="30"
                rows="2"
                placeholder="Напишите что-нибудь"
              />
              <span onClick={createPost}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </form>
          </div>
          <hr />
        </div>
      </div>
      {posts}
    </div>
  );
}

export default MyPosts;
