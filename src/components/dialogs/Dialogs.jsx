import s from './dialogs.module.css';
import profile_img from './../../images/profile.jpg';
import dialog1 from './../../images/dialogs-1.jpg';
import chatbg from './../../images/chatbg.jpg';
import SearchInput from "../repeaters/searchinput/SearchInput";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active} className={s.dialog}>
            <div className={s.imageContainer}>
                <img src={dialog1} alt=""/>
                <span className={s.status}> </span>
            </div>
            <h5>Paul Molive</h5>
        </NavLink>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialogContent}>
            <p>h1</p>
            <p>h2</p>
            <p>h1</p>
        </div>

    );
}

const dialogItemsList = [
    {id:1,name:'Владимир Фетисов'},
    {id:2,name:'Максим Рамазанов'},
    {id:3,name:'Ирина Фролова'},
    {id:4,name:'Иван Свирин'},
    {id:5,name:'Артём Тарасов'},
    {id:6,name:'Кирилл Кудрин'},
    {id:7,name:'Артур Пирожков'}
];
dialogItemsList.map((i)=>{
    console.log(i);
});

const Dialogs = (props) => {
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

                        <DialogItem name="Владимир Фетисв" id="1"/>
                        <DialogItem name="Елена Свирина" id="2"/>
                        <DialogItem name="Иван Свирин" id="3"/>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${chatbg})`}} className={s.openDialog}>
                    <Message />
                </div>
            </div>
        </div>
    );
}
export default Dialogs;