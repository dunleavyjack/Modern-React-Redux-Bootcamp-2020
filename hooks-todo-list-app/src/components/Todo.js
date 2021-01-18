import React from 'react'

const Todo = ({ remove, todo }) => {
    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={() => remove(todo.id)}>X</button>
        </div>
    )
}

export default Todo