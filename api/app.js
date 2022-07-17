require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const {configDB} = require('./config/database');
const todoRoutes = require('./routes/todo.routes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

configDB();

app.get('/', (req,res) => {
    res.send("WELCOME TO MY TODOS BACKEND!!");
})

app.use('/', todoRoutes);

app.listen(9000, () => {
    console.log("SERVING ON PORT 9000");
})