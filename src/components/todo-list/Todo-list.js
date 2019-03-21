import React from 'react';

import TodoListItem from '../todo-list-item/Todo-list-item';

const TodoList = ({ todos }) => {
    
    const elements = todos.map((item) => {
        return (
            <TodoListItem
                label={item.label}
                important={item.important}
            />
        );
    });
    return (
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;