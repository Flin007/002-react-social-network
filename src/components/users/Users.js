import React from 'react';
import s from './users.module.css';


function Users(props) {
    console.log(props.users.length)
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: '/users-avatar/user-1.jpg',
                followed: true,
                name: 'Владимир Фетисов',
                status: 'Владимирстатус',
                location:
                    {
                        city: 'Moscow', country: 'Russia'
                    }
            },
            {
                id: 2,
                photoUrl: '/users-avatar/user-2.jpg',
                followed: false,
                name: 'Максим Рамазанов',
                status: 'Максим статус',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: '/users-avatar/user-3.jpg',
                followed: true,
                name: 'Ирина Фролова',
                status: 'Ирина статус',
                location: {city: 'Kiev', country: 'Ukrain'}
            },
            {
                id: 4,
                photoUrl: '/users-avatar/user-4.jpg',
                followed: false,
                name: 'Иван Свирин',
                status: 'Иван Статус',
                location: {city: 'Derbent', country: 'Russia'}
            }
        ]);
    }

    return(
        <div className="pageContent">
            <div className={s.users_row}>
                {props.users.map(user => (
                    <div className={s.user_card} key={user.id}>
                        <div className={s.card_bg}>
                            <img src={`/users-bg/user-bg${Math.floor(Math.random() * (8 - 1 + 1)) + 1}.jpg`} alt=""/>
                        </div>
                        <div className={s.card_content}>
                            <div className={s.profile_details}>
                                <img src={user.photoUrl} alt=""/>
                                <div className={s.profile_details__data}>
                                    <h4>{user.name}</h4>
                                    <p>{user.status}</p>
                                </div>
                            </div>
                            {user.followed
                                ? <button onClick={ () => {props.unFollow(user.id)} } className={s.follow_btn}>Отписаться</button>
                                : <button onClick={ () => {props.follow(user.id)} } className={s.follow_btn}>Подписаться</button>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users