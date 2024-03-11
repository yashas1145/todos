import React, { useState } from "react";

function App () {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange (event) {
        setTodo(event.target.value);
    }

    function handleClick () {
        setTodos(prevTodos => [...prevTodos, todo]);
        setTodo("");
    }

    return <div>
        <div className="todo-container flex flex-mid flex-col">
            <h1>To-Do list</h1>
            <div className="flex-row">
                <input type="text" value={todo} placeholder="Enter a todo" onChange={handleChange}/>
                <button onClick={handleClick}>Add todo</button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
    </div>
}

export default App;
