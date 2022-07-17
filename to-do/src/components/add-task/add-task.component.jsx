import React from "react";
import './add-task.styles.css';
import Button from '../../components/button/button.component';

const AddTask = () => {

    const addNewTask = () => {}

    return (
        <div className="add-task">
            <div className="add-heading">
                <p>Add a new task in the list</p>
            </div>
            <div className="add-input">
                <input type="text" className="input-field" placeholder="Enter the task here"/>
                <div className="submit-btn">
                    <Button onClickHandler={addNewTask}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default AddTask;