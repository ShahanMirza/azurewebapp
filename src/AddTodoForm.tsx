import React,{useState} from 'react'

interface Props {
    addTodo:AddTodo;
    updateTodo:UpdateTodo;
}

export const AddTodoForm:React.FC<Props>=({addTodo,updateTodo})=>{
    const [text,setText]=useState('')
    const [complete,setComplete]=useState();
    console.log(updateTodo)
    return(
        <form>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                addTodo(text);
                setText('')
            }}>Add Todo</button>
        </form>
    )
}