import React from "react";
import AddTask from "../../components/add-task/add-task.component";
import TasksToDo from "../../components/tasks-todo/tasks-todo.component";
import './homepage.styles.css';
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {

    const [todos, setTodos] = useState();
    const [loader, setLoader] = useState(false);
    const [title, setTitle] = useState("");

    //getting all the to-dos
    useEffect(() => {
        const getTodos = async () => {
            const res = await axios.get('http://localhost:9000/todos/all');
            setTodos(res.data.todo);
        }
        getTodos();
    }, [loader]);

    // for adding new to-do
    const addNewTask = async () => {
        setLoader(true);
        const res = await axios.post('http://localhost:9000/todo/new', {
            title: title
        });
        setLoader(false);
    }

    //for deleting to-do
    const deleteTask = async (id) => {
        setLoader(true);
        const res = await axios.delete(`http://localhost:9000/todo/${id}`)
        setLoader(false);
    }

    //for updating to-do
    const updateTask = async (id, completed) => {
        setLoader(true);
        const res = await axios.put(`http://localhost:9000/todo/update/${id}`,{
            completed
        })
        setLoader(false);
    }

    return (
        <div className="home">
            <div className="title">
                <p>To-Do List</p>
            </div>
            <AddTask addNewTask={addNewTask} setTitle={setTitle} />
            <TasksToDo editLoader={loader} todos={todos} deleteTask={deleteTask} toggleTaskStatus={updateTask} />
        </div>
    )
}

export default HomePage;