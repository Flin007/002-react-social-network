import s from './dialogs.module.css';
import profile_img from './../../images/profile.jpg';
import chatbg from './../../images/chatbg.jpg';
import SearchInput from "../repeaters/searchinput/SearchInput";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



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
                <div style={{backgroundImage: `url(${chatbg})`}} className={s.openDialog}>
                    <div className={s.dialogContent}>
                        {messages}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;