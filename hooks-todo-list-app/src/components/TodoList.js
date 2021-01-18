import React, { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {

    const testTodos = []
    const [todos, setTodos] = useState(testTodos);

    const addTodo = (words) => {
        const newTodo = { text: words }
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
        const removed = [...todos].filter(todo => todo.id !== id) 
        setTodos(removed)
    }

    const renderedTodos = todos.map(todo => {
        const identifier = Math.floor(Math.random() * 100000000)
        return (
            <Todo 
                todo={todo}
                key={identifier}
                id={identifier}
                completed={false}
                remove={removeTodo}
            />
        )
    })


    return (
        <div>
            {renderedTodos}
            <NewTodoForm createTodo={addTodo} />
        </div>
    )
}

export default TodoList