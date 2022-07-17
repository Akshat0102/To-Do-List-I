import React from "react";
import './add-task.styles.css';
import Button from '../../components/button/button.component';


const AddTask = ({ addNewTask, setTitle }) => {
    return (
        <div className="add-task">
            <div className="add-heading">
                <p>Add a new task in the list</p>
            </div>
            <form className="form-data">
                <input type="text" className="input-field" placeholder="Enter the task here" onChange={e => setTitle(e.target.value)} />
                <div className="submit-btn">
                    <Button onClickHandler={addNewTask}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default AddTask;