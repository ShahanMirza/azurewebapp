import React from 'react'
// interface Todo {
//     text: string;
//     complete: boolean;
// }

interface Props{
    todo:Todo;
    toggleTodo:ToggleTodo;
    removeTodo:RemoveTodo;
    updateTodo:UpdateTodo
}

export const TodoListItem: React.FC<Props> = ({todo,toggleTodo,removeTodo,updateTodo}) =>{ 
    return (
    <li>
        <label style={{textDecoration: todo.complete ? 'line-through' : undefined}}>
        <input type="checkbox" checked={todo.complete} onClick={()=>{toggleTodo(todo)}}/>{''}{todo.text}
        </label>
        <button onClick={()=>updateTodo(todo.text,todo.complete)}>Edit Todo</button>
        <button style={{marginRight:30}} onClick={()=>{removeTodo(todo)}}>Delete</button>
        
    </li>);
};