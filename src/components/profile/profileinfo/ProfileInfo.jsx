import s from './ProfileInfo.module.css';
import profile_img from './../../../images/profile.jpg';
import profile_bg from './../../../images/profile-bg.jpg';
import SocialIcons from "./SocialIcons";
const ProfileInfo = (props) => {
    return(
        <div className={s.profileHeader}>
            <div className={s.coverContainer}>
                <img src={profile_bg} alt=""/>
            </div>
            <div className={s.userDetails}>
                <div className={s.profileImage}>
                    <img src={profile_img} alt=""/>
                </div>
                <h3>Владимир Фетисов</h3>
            </div>
            <div className={s.profileInfo}>
                <ul className={s.socialLinks}>
                    <li><a href=""><img src={SocialIcons[0]} alt=""/></a></li>
                    <li><a href=""><img src={SocialIcons[1]} alt=""/></a></li>
                    <li><a href=""><img src={SocialIcons[2]} alt=""/></a></li>
                    <li><a href=""><img src={SocialIcons[3]} alt=""/></a></li>
                    <li><a href=""><img src={SocialIcons[4]} alt=""/></a></li>
                    <li><a href=""><img src={SocialIcons[5]} alt=""/></a></li>
                </ul>
                <div className={s.profileStats}>

                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;