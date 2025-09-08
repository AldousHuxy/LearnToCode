import asyncHandler from 'express-async-handler';
import { Request, RequestHandler, Response } from 'express';
import { TodoService } from '../services/todoService';
import { Todo } from '../types/todo';

export const getTodos: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const todos: Todo[] = await TodoService.getTodos()
    
    res.json(todos).status(200)
})