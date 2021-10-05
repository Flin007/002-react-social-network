import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";

function Profile() {
    return (
        <div className="pageContent">
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
