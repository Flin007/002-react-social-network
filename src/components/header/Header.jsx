import logo from './../../images/logo.png';
import profile_img from './../../images/profile.jpg';
import s from './Header.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Header() {
	return(
		<header className={s.site_header}>
			<div className="row">
				<a className={s.site_logo} href="">
					<img src={logo} alt="Social Network" />
					<span>SocialV</span>
				</a>
				<span className={s.toggle_menu}><FontAwesomeIcon icon={faBars} /></span>
			</div>
			<div className="row">
				<form action="" className={s.searchbox}>
					<input type="text" placeholder="Введите для поиска..." />
				</form>
			</div>
			<div className="row">
				<div className={s.profile_container}>
					<img className={s.profile_img} src={profile_img} alt="" />
					<span className={s.profile_name}>Владимир Фетисов</span>
				</div>
			</div>
		</header>
	);
}

export default Header;