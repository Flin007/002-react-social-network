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

  let posts = props.posts.map(p => <Post content={p.content} isLike={p.isLike} likeCount={p.likeCount} commentCount={p.commentCount} sharesCount={p.sharesCount} />);
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
                name=""
                id=""
                cols="30"
                rows="4"
                placeholder="Напишите что-нибудь"
              ></textarea>
              <button type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
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
