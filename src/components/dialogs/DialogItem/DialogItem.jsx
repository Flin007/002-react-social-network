import {NavLink} from "react-router-dom";
import dialog1 from "../../../images/dialogs-1.jpg";
import s from  "./DialogItem.module.css";

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
export default DialogItem;