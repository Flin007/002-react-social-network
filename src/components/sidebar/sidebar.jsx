import s from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons'
function Sidebar(){
	return(
		<div className={s.sidebar}>
			<nav>
				<ul>
					<li><a href=""><span><FontAwesomeIcon icon={faNewspaper} /></span>Лента</a></li>
					<li><a className={s.active} href=""><span><FontAwesomeIcon icon={faUser} /></span>Моя страница</a></li>
					<li><a href=""><span><FontAwesomeIcon icon={faUsers} /></span>Друзья</a></li>
				</ul>
			</nav>
		</div>
	);
}

export default Sidebar;