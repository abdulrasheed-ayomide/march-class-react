import React, { useState, useEffect } from "react";

const TodoListNode = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    const normalizeTodos = (data) => {
        if (Array.isArray(data)) return data;
        if (data?.todos) return data.todos;
        if (data?.data) return data.data;
        return [];
    };

    const getTodos = async () => {
        try {
            const res = await fetch("http://localhost:4000/api/todo");
            const data = await res.json();
            console.log("response" ,data);
            
            setTodos(normalizeTodos(data));
            setError("");
        } catch (err) {
            setError("Unable to load todos from the backend.");
            setTodos([]);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        try {
            const res = await fetch("http://localhost:4000/api/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text: text })
            });
            const data = await res.json();
            console.log("response", data);
            
            setTodos((prev) => [...prev, data]);
            setText("");
            setError("");
        } catch (err) {
            setError("Unable to add todo.");
        }
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter todo...." value={text} onChange={(e) => setText(e.target.value)} />
                <button>Add Todo</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <ul>
                {Array.isArray(todos) && todos.map((todo, i) => (
                    <li key={i}>
                        <span>{todo.task || todo.text || todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoListNode;