import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    //
    let sendMessage = () =>{
        props.store.dispatch(sendMessageActionCreator());
    }
    let newMessageTextChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    //
    let dialogs  = props.store.getState().dialogs.userDialogs.map( el => <DialogItem name={el.name} id={el.id}/> );
    let messages = props.store.getState().dialogs.messages.map( m => <Message text={m.text}/>);
    return (
        <Dialogs newMessageText={props.store.getState().dialogs.newMessageText} messages={messages} dialofs={dialogs} newMessgeTextChange={newMessageTextChange} sendMessage={sendMessage}/>
    );
}
export default DialogsContainer;