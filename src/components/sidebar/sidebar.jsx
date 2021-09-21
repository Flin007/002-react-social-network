import s from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faNewspaper, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
function Sidebar(){
	return(
		<div className={s.sidebar}>
			<nav>
				<ul>
					<li><a href="/profile" className={s.active}><span><FontAwesomeIcon icon={faUser} /></span>Моя страница</a></li>
					<li><a href="/feed"><span><FontAwesomeIcon icon={faNewspaper} /></span>Новости</a></li>
					<li><a href="/dialogs"><span><FontAwesomeIcon icon={faComment} /></span>Мессенджер</a></li>
					<li><a href="/friends"><span><FontAwesomeIcon icon={faUsers} /></span>Друзья</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;