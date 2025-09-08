import { Todo } from "../types/todo";

export const TodoService = {
    getTodos: async (): Promise<Todo[]> => {
        // Simulate fetching todos from a database or external API
        return [
            { todoId: 1, title: 'Learn TypeScript', completed: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
            { todoId: 2, title: 'Build a REST API', completed: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
        ];
    }
}