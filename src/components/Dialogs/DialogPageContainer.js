import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/DialogsPageReducer";


let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        textChange: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
};

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

const DialogPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);


export default DialogPageContainer