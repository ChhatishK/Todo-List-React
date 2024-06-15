import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoEditForm from './TodoEditForm';

import '../App.css'; 

export const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('date');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = task => {
        const newTodo = { id: uuidv4(), task, completed: false, isEditing: false, date: new Date() };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: false } : todo));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') {
            return todo.completed;
        }
        if (filter === 'active') return !todo.completed;
        return true;
    });

    const sortedTodos = filteredTodos.sort((a, b) => {
        if (sort === 'alphabetical') return a.task.localeCompare(b.task);
        return new Date(a.date) - new Date(b.date);
    });

    return (
        <div className='w-[450px] h-auto border rounded-lg border-gray-500 flex flex-col gap-3 items-center p-4 shadow-sky-900'>
            <h1 className='uppercase text-2xl text-white'>let's Be Consistent</h1>
            <TodoForm addTodo={addTodo} />

            <div className='flex gap-3 flex-wrap justify-center pb-2'>

                <button className='bg-sky-700 hover:bg-sky-900 transition-all duration-200 pl-2 pr-2 rounded-md text-white' onClick={() => setFilter('all')}>All</button>
                
                <button className='bg-sky-700 hover:bg-sky-900 transition-all duration-200 pl-2 pr-2 rounded-md text-white' onClick={() => setFilter('completed')}>Completed</button>

                <button className='bg-sky-700 hover:bg-sky-900 transition-all duration-200 pl-2 pr-2 rounded-md text-white' onClick={() => setFilter('active')}>Active</button>

                <button className='bg-sky-700 hover:bg-sky-900 transition-all duration-200 pl-2 pr-2 rounded-md text-white' onClick={() => setSort('date')}>Sort by Date</button>

                <button className='bg-sky-700 hover:bg-sky-900 transition-all duration-200 pl-2 pr-2 rounded-md text-white' onClick={() => setSort('alphabetical')}>Sort by Alphabetical</button>

            </div>
            {sortedTodos.map(todo => (
                todo.isEditing ? (
                    <TodoEditForm editTask={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
        </div>
    );
};
