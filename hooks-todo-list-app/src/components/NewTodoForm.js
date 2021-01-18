import React, { useState } from 'react'

const NewTodoForm = ({ createTodo }) => {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo(text);
        setText("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTodo"></label>
                <input
                    type="text"
                    name="newTodo"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm






