import React from "react";
import './task-tile.styles.css';
import Button from '../../components/button/button.component';

const TaskTile = ({ id, title, completed, toggleTaskStatus, deleteTask }) => {
    return (
        <div className={completed ? "tile-gn" : "tile"}>
            <div className="task-desc">
                <p>{title}</p>
            </div>
            <div className="task-action">
                {
                    completed
                        ?
                        <div className="mark-btn-complete">
                            <Button onClickHandler={() => toggleTaskStatus(id, !completed)}>Mark as Incomplete</Button>
                        </div>
                        :
                        <div className="mark-btn-incomplete">
                            <Button onClickHandler={() => toggleTaskStatus(id, !completed)}>Mark as Completed</Button>
                        </div>
                }
                <div className="delete-btn">
                    <Button onClickHandler={deleteTask}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default TaskTile;