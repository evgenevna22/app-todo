import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/App-header';
import SearchPanel from './components/todo-search-panel/Todo-search-panel';
import TodoList from './components/todo-list/Todo-list';
import TodoListItem from './components/todo-list-item/Todo-list-item';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />,
    document.getElementById('root'));