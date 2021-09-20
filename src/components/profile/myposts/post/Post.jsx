import profile_img from "./../../../../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faHeart,
  faShareAlt,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.postHeader}>
        <div className={s.profileImg}>
          <img src={profile_img} alt="" />
        </div>
        <div className={s.authorInfo}>
          <div className="row">
            <a href="" className={s.userName}>
              Владимир Фетисов
            </a>
            <span className={s.postAction}>Опубликовал запись</span>
          </div>
          <span className={s.timeAgo}>3ч назад</span>
        </div>
        <span className={s.postSettings}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </div>
      <div className={s.postContent}>{props.content}</div>
      <div className={s.postFooter}>
        <div>
          <span className={`${s.likesCount} ${s.iconCounter}`}>
            <FontAwesomeIcon icon={faHeart} />
            {props.likeCount}
          </span>
          <span className={`${s.commentsCount} ${s.iconCounter}`}>
            <FontAwesomeIcon icon={faComment} />
            {props.commentCount}
          </span>
        </div>
        <div>
          <span className={`${s.sharesCount} ${s.iconCounter}`}>
            <FontAwesomeIcon icon={faShareAlt} />
            {props.sharesCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
