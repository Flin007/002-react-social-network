import s from "./MyPosts.module.css";
import Post from "./post/Post";

function MyPosts() {
  return (
    <div className={s.pageContent}>
      <Post />
      <Post />
    </div>
  );
}

export default MyPosts;
