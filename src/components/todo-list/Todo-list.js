import React from 'react';
import TodoListItem from '../todo-list-item/Todo-list-item';

const TodoList = ({ todos }) => {
    
    const elements = todos.map((item) => {
        
        const { id, ...itemsProps } = item;
        
        return (
            <TodoListItem
                key={id}
                {...itemsProps}
            />
        );
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;