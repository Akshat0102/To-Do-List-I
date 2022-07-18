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
            const res = await axios.get('https://todo-backendnode.herokuapp.com/todos/all');
            setTodos(res.data.todo);
        }
        getTodos();
    }, [loader]);

    // for adding new to-do
    const addNewTask = async () => {
        setLoader(true);
        await axios.post('https://todo-backendnode.herokuapp.com/todo/new', {
            title: title
        });
        setLoader(false);
    }

    //for deleting to-do
    const deleteTask = async (id) => {
        setLoader(true);
        await axios.delete(`https://todo-backendnode.herokuapp.com/todo/${id}`)
        setLoader(false);
    }

    //for updating to-do
    const updateTask = async (id, completed) => {
        setLoader(true);
        await axios.put(`https://todo-backendnode.herokuapp.com/todo/update/${id}`, {
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