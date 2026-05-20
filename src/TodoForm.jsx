import React, {useState} from "react";
import styling from "./TodoList.module.css";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        // Handle form submission logic here
        // console.log("Todo submitted:", value);
        addTodo( value   )
        
        setValue(""); // Clear the input field after submission
    };

    return (
        <form className={styling.Todoform} onSubmit={handleSubmit}>
            <h3>My TodoList</h3>
            <input type="text" className="todo-input" placeholder="Enter your todo list.." value={value} onChange={(e) => setValue(e.target.value)} />

            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}