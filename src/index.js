import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AppHeader from './components/app-header/App-header';
import SearchPanel from './components/todo-search-panel/Todo-search-panel';
import TodoList from './components/todo-list/Todo-list';

const App = () => {
    
    const todoData = [
        {
            key: 'key-vodka',
            label: 'Drink vodka',
            important: true
        },
        {
            key: 'key-react',
            label: 'Learn React',
            important: false
        },
    ];
    
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));