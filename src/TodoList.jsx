import React from "react";

export const TodoList = ({task}) => {
    // console.log(task, 'task in todolist');
    
    return (
        <>
                <ul>
                    {task.map((todo, index) => {
                        return <li key={index}>{todo.task}</li>
                    })}
                </ul>
        </>
    )
}