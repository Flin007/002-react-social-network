import s from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
function Sidebar(){
	return(
		<div className={s.sidebar}>
			<nav>
				<ul>
					<li><NavLink to="/profile" activeClassName={s.active}><span><FontAwesomeIcon icon={faUser} /></span>Моя страница</NavLink></li>
					<li><NavLink to="/feed" activeClassName={s.active}><span><FontAwesomeIcon icon={faNewspaper} /></span>Новости</NavLink></li>
					<li><NavLink to="/dialogs" activeClassName={s.active}><span><FontAwesomeIcon icon={faComment} /></span>Мессенджер</NavLink></li>
					<li><NavLink to="/friends" activeClassName={s.active}><span><FontAwesomeIcon icon={faUsers} /></span>Друзья</NavLink></li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;