import MyPosts from "./myposts/Myposts";
import s from "./profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

function Profile(props) {

    return (
        <div className="pageContent">
            <ProfileInfo/>
            <MyPosts posts={props.appState}/>
        </div>
    );
}

export default Profile;
