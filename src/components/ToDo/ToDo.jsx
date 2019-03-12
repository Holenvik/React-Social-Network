import React from "react"
import style from "./ToDo.module.css"

let Tasks = (task) => {
    return (
        <div className={style.todo_list_item}>
            {task.title}
        </div>
    )
};

let ToDo = (props) => {
    debugger
    let {tasks, status, newTextTitle} = props;
    let {addNewTitleText} = props;
    let onAddNewTitleText = (e) => {
        addNewTitleText(e.target.value)
    };
    return (
        <div className={style.todo}>
            <div className={style.todo_status}>{`Status: ${status}`}</div>
            <div>
                <input type="text"
                       className={style.todo_input}
                       onChange={onAddNewTitleText}
                       value={newTextTitle}/>
            </div>
            <button>Keks</button>
            <div className={style.todo_list}>
                {tasks.map(task =>
                    <Tasks key={task.title} title={task.title}/>
                )}
            </div>
        </div>
    )
};

export default ToDo