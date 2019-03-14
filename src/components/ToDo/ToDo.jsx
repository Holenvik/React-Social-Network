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
    let {tasks, status, newTextTitle} = props;
    let {addNewTitleText, addTask} = props;
    let textTitle = React.createRef();
    let onAddNewTitleText = (e) => {
        addNewTitleText(e.target.value)
    };
    let onClickAddTask = () => {
        addTask(textTitle.current.value)
    };
    return (
        <div className={style.todo}>
            <div className={style.todo_status}>{`Status: ${status}`}</div>
            <div>
                <input type="text"
                       className={style.todo_input}
                       onChange={onAddNewTitleText}
                       value={newTextTitle}
                       ref={textTitle}/>
            </div>
            <button onClick={onClickAddTask}>Keks</button>
            {tasks && <div className={style.todo_list}>
                {tasks.map(task =>
                    <Tasks key={task.title} title={task.title}/>
                )}
            </div>}
        </div>
    )
};

export default ToDo