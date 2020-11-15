const express  = require('express')
const {getTodos , addTodo, deleteTodo} =require('../controllers/todos')
const todoRouter = express.Router();

todoRouter
.route('/')
.get(getTodos)
.post(addTodo);

todoRouter.route("/:id")
.delete(deleteTodo)




module.exports = todoRouter;