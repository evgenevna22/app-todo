import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    
    const liStyle = {
      color: important ? 'tomato' : 'black'
    };
    
    return (
        <li style={ liStyle }
            className="list-group-item todo-list__item">
            { label }
        </li>
    );
};

export default TodoListItem;