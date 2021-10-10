import React from 'react';
import axios from 'axios';
import s from './users.module.css';

class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                response.data.items.push({
                    id: 1,
                    photoUrl: '/users-avatar/user-1.jpg',
                    followed: true,
                    name: 'Владимир Фетисов',
                    status: 'Владимирстатус',
                    location:
                        {
                            city: 'Moscow', country: 'Russia'
                        },
                    photos:{
                        large:'123',
                        small:'/users-avatar/user-1.jpg'
                    }
                })
                this.props.setUsers(response.data.items);
            });
        }
    }

    render() {
        this.getUsers()
        return (
            <div className="pageContent">
                <div className={s.users_row}>
                    {this.props.users.map(user => (
                        <div className={s.user_card} key={user.id}>
                            <div className={s.card_bg}>
                                <img src={`/users-bg/user-bg${Math.floor(Math.random() * (8 - 1 + 1)) + 1}.jpg`} alt=""/>
                            </div>
                            <div className={s.card_content}>
                                <div className={s.profile_details}>
                                    <img src={user.photos.small === null ? '/users-avatar/noAvatar.png' : user.photos.small} alt=""/>
                                    <div className={s.profile_details__data}>
                                        <h4>{user.name}</h4>
                                        <p>{user.status}</p>
                                    </div>
                                </div>
                                {user.followed
                                    ? <button onClick={ () => {this.props.unFollow(user.id)} } className={s.follow_btn}>Отписаться</button>
                                    : <button onClick={ () => {this.props.follow(user.id)} } className={s.follow_btn}>Подписаться</button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



/*function Userss(props) {
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            response.data.items.push({
                id: 1,
                photoUrl: '/users-avatar/user-1.jpg',
                followed: true,
                name: 'Владимир Фетисов',
                status: 'Владимирстатус',
                location:
                    {
                        city: 'Moscow', country: 'Russia'
                    },
                photos:{
                    large:'123',
                    small:'/users-avatar/user-1.jpg'
                }
            })
            props.setUsers(response.data.items);
        });
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
                                <img src={user.photos.small === null ? '/users-avatar/noAvatar.png' : user.photos.small} alt=""/>
                                <div className={s.profile_details__data}>
                                    <h4>{user.name}</h4>
                                    <p>{user.status}</p>
                                </div>
                            </div>
                            {user.followed
                                ? <button onClick={ () => {props.unFollow(user.id)} } className={s.follow_btn}>Отписаться</button>
                                : <button onClick={ () => {props.follow(user.id)} } className={s.follow_btn}>Подписаться</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}*/

export default Users