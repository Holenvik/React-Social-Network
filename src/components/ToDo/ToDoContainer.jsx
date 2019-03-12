import React, {Component} from "react"
import ToDo from "./ToDo";
import {connect} from "react-redux";
import {addNewTitleTextAC, getTasksThunk} from "../../redux/ToDoPageReducer";

class ToDoContainer extends Component {

    componentDidMount() {
        this.props.getTasks()
    }

    render() {
        return <ToDo {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.toDoPage.tasks,
        status: state.toDoPage.status,
        newTextTitle: state.toDoPage.newTextTitle
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewTitleText: (text) => {
            dispatch(addNewTitleTextAC(text))
        },
        getTasks: () => {
            dispatch(getTasksThunk())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer)