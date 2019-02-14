import React from "react";
import dialog from "./DialogsPage.module.css";
import Friend from "./Friend/Friend";

const Message = ({message}) => {
    return (
        <div className={dialog.dialog_message_me}>
            <span>{message}</span>
        </div>
    );
};
const DialogsPage = props => {

    debugger;
    let {messages} = props;
    let messageItem = messages.map(el => <Message message={el.content}/>);
    let textMessage = React.createRef();
    let newMessage = () => {
        let text = textMessage.current.value;
        // props.addMessage(text);
        let action = {
            type:"ADD-MESSAGE",
            text: text
        }
        props.dispatch(action);

        textMessage.current.value = ""
    };
    return (
        <div className={dialog.dialog}>
            <div className={dialog.dialog_title}>Dialogs</div>
            <div className={dialog.dialog_person}>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
            <div>
                <div className="dialog_message">
                    <Message/>
                    <div className="dialog_message_friend">
                        <span>ASD:NKJDSFHBJKHSDF</span>
                    </div>
                    <div className="dialog_message_me">
                        <span>Take me to the moon, my dear friend</span>
                    </div>
                    {messageItem}
                </div>
                <div className={dialog.dialog_input}>
                    <div className={dialog.dialog_input_text}>
                        <input type="text"
                               ref={textMessage}
                        />
                    </div>
                    <div className={dialog.dialog_input_button}>
                        <button onClick={newMessage}><span>Отправить</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogsPage;
