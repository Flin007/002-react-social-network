import React from "react";
import MyPosts from "./myposts/Myposts";
import s from "./profile.module.css";
import ProfileInfo from "./profileinfo/ProfileInfo";

function Profile(props) {
    return (
        <div className="pageContent">
            <ProfileInfo/>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
