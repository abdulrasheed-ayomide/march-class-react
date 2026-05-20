import React, { useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"



export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {task: todo}])
        // console.log(todos);

    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
             <TodoList task={todos} />
    
           
        </div>
    )
}