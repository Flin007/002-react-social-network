import React from 'react';
import s from './dialogs.module.css';
import profile_img from './../../images/profile.jpg';
import chatbg from './../../images/chatbg.jpg';
import SearchInput from "../repeaters/searchinput/SearchInput";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let messageText = React.createRef();
let sendMessage = () =>{
    alert(messageText.current.value);
}

const Dialogs = (props) => {
    let dialogs  = props.appState.userDialogs.map( el => <DialogItem name={el.name} id={el.id}/> );
    let messages = props.appState.messages.map( m => <Message text={m.text}/>);
    return (
        <div className="pageContent">
            <div className={s.dialogsContainer}>
                <div className={s.leftColumn}>
                    <div className={s.myProfile}>
                        <img src={profile_img} alt=""/>
                        <div className={s.chatCaption}>
                            <h5>Владимир Фетисов</h5>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className={s.searchBlock}>
                        <SearchInput style="white" iconpos="left" placeholder="Поиск..."/>
                    </div>
                    <div className={s.dialogsList}>
                        <h4>Мои диалоги</h4>
                        {dialogs}
                    </div>
                </div>
                <div className={s.openDialog}>
                    <div className={s.openDialogHeader}>
                        <div className={s.userData}>
                            <img src={profile_img} alt=""/>
                            <h5>Имя пользователя</h5>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${chatbg})`}} className={s.dialogContent}>
                        {messages}
                    </div>
                    <div className={s.openDialogFooter}>
                        <textarea ref={messageText} name="" id="" cols="30" rows="1" placeholder='Введите сообщение...'></textarea>
                        <button onClick={sendMessage} className={s.sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;