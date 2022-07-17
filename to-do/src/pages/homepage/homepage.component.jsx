import React from "react";
import AddTask from "../../components/add-task/add-task.component";
import './homepage.styles.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="title">
                <p>To-Do List</p>
            </div>
            <AddTask />
        </div>
    )
}

export default HomePage;