const express = require('express');
const router = new express.Router();
const Todo = require('../models/todos');


router.get('/', async (req, res, next) => {
    try {
        const todos = await Todo.getAll()
        return res.json(todos)
    } catch (e) {
        return next(e);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const todo = await Todo.getById(req.params.id);
        return res.json(todo);
    } catch (e) {
        return next(e);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const {todo} = req.body;
        const newTodo = await Todo.create(todo)
        return res.json(newTodo);
    } catch (e) {
        return next(e);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        let todo = await Todo.getById(req.params.id);
        await todo.remove();
        return res.json({msg: 'Deleted'});
    } catch (e) {
        return next(e);
    }
})

module.exports = router;