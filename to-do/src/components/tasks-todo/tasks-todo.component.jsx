import React from "react";
import TaskTile from "../task-tile/task-tile.component";
import './tasks-todo.styles.css';

const TasksToDo = ({ todos, editLoader, toggleTaskStatus, deleteTask }) => {
    console.log(todos)
    return (
        todos && !editLoader ?
            <div className="tasks">
                <div className="tasks-added-heading">
                    <p>Added task in to-do list</p>
                </div>
                <div className="tasks-wrap">
                    {
                        todos.length === 0 ?
                            <p style={{ color: "white" }}>NO TO-DOS</p>
                            :
                            todos.map(todo => (
                                <TaskTile toggleTaskStatus={toggleTaskStatus} id={todo._id} title={todo.title} completed={todo.completed} deleteTask={() => deleteTask(todo._id)} />
                            ))
                    }
                </div>
            </div>
            :
            <p style={{ color: 'white' }}>LOADING...</p>
    )
}

export default TasksToDo;