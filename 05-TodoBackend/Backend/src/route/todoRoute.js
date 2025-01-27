import express, { Router } from 'express'

import { addTodo,getTodoById,getTodos,updateTodo,deleteTodo} from '../controller/todoController.js'

const todoRouter = express.Router();

todoRouter.post("/addTodo",addTodo);
todoRouter.get("/todos/:id",getTodoById);
todoRouter.get("/getTodos",getTodos);
todoRouter.patch("/todos/:id",updateTodo);
todoRouter.delete("/todos/:id",deleteTodo);



export {
    todoRouter
}