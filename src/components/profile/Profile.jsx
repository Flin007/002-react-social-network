import MyPosts from "./myposts/Myposts";
import s from "./profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

function Profile() {
    return (
        <div className="pageContent">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
