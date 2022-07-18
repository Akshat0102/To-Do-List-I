const express = require('express');
const router = express.Router();
const { getTodos, postTodo, deleteTodo, updateTodo } = require('../controllers/todos.controllers');

// @desc GET all todos
// @path GET 
// @route /todos/all
router.get('/todos/all', getTodos);

// @desc POST todo
// @path POST
// @route /todo/new
router.post('/todo/new', postTodo)

// @desc DELETE todo
// @path DELETE
// @route /todo/delte/:id
router.delete('/todo/:id', deleteTodo);

// @desc PUT todo
// @path PUT
// @route /todo/update/:id
router.put('/todo/update/:id', updateTodo);


module.exports = router;