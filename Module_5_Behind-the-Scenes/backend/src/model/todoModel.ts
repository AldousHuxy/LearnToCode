import { DataTypes, Model, Optional } from 'sequelize';
import { Todo } from '../types/todo';

export interface TodoCreationAttributes extends Optional<Todo, 'todoId' | 'createdAt' | 'updatedAt'> {}

export class TodoModel extends Model<Todo, TodoCreationAttributes> implements Todo {
    public todoId!: number;
    public title!: string;
    public completed!: boolean;
    public createdAt!: string;
    public updatedAt!: string;
}

TodoModel.init({
    todoId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    // sequelize,
    modelName: 'Todo',
    tableName: 'todos',
    timestamps: true
});
