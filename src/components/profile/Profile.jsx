import MyPosts from "./myposts/Myposts";
import s from "./profile.module.css";

function Profile() {
  return (
    <div className={s.pageContent}>
      <MyPosts />
    </div>
  );
}

export default Profile;
