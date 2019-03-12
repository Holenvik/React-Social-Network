import {statuses} from "./STATUSES";
import * as axios from "axios";

const SET_TASK = "network/ToDo/SET-TASK";
const SET_STATUS = "network/ToDo/SET-STATUS";
const ADD_TASK = "network/ToDo/ADD-TASK";
const ADD_NEW_TITLE_TEXT = "network/ToDo/ADD-NEW-TITLE-TEXT";

let initialState = {
    tasks: [
        {title: "Помыть посуду"},
        {title: "ЛЯЛЯЛЯЛ"}
    ],
    newTextTitle: null,
    status: statuses.NOT_INITIALIZED
};

let ToDoPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK: {
            return {
                ...state, tasks: action.tasks
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case ADD_TASK: {
            let task = {
                title: state.newTextTitle
            }
            return {
                ...state,
                tasks: [...state.tasks, task]
            }
        }
        case ADD_NEW_TITLE_TEXT: {
            return {
                ...state,
                newMessageText: action.titleText
            }
        }
        default: {
            return state
        }

    }
};


export let getTasksThunk = () => (dispatch) => {
    axios
        .get('https://repetitora.net/api/JS/Tasks?widgetId=74629')
        .then(result => {
            console.log(result)
        })
}

export let setTasksAC = (tasks) => ({type: SET_TASK, tasks});
export let setStatusAC = (status) => ({type: SET_TASK, status});
export let addTaskAC = () => ({type: ADD_TASK});
export let addNewTitleTextAC = (titleText) => ({type: ADD_NEW_TITLE_TEXT, titleText});

export default ToDoPageReducer