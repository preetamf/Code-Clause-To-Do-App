import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newvalue) => {
        if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
            return;
        }

        setTodos( (prev) => prev.map(item => (item.id === todoId ? newvalue : item)));
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };


    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <>
            <h1>What's the plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo} />
        </>
    ) 
}

export default TodoList
