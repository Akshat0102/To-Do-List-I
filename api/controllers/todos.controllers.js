const Todos = require('../models/todo.models');

module.exports.getTodos = async (req, res) => {
    const todo = await Todos.find({});
    res.status(200).send({
        success: true,
        todo
    })
}

module.exports.postTodo = async (req, res) => {
    const { title } = req.body;

    const todo = new Todos({
        title: title
    })
    await todo.save();

    res.status(200).send({
        success: true,
        todo
    })
}

module.exports.deleteTodo = async (req, res) => {

    const { id } = req.params;

    await Todos.findByIdAndDelete(id);

    res.status(200).send({
        success: true,
        msg: "successfully deleted"
    })
}

module.exports.updateTodo = async (req, res) => {

    const { id } = req.params;

    const { completed } = req.body;

    await Todos.findByIdAndUpdate(id, {completed: completed});

    res.status(200).send({
        success: true,
        msg: "successfully updated"
    })

}