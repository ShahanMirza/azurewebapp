import React, { useState } from "react";
import { Notfound } from "./Notfound";
import MainComponent from "./Avada/MainComponent";
import { CssBaseline } from "@material-ui/core";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { TodoList } from './Todolist';
// import { AddTodoForm } from './AddTodoForm';
// const initialTodos:Todo[]=[
//   {
//     text:"Walk the dog",
//     complete:false,
//   },
//   {
//     text:"Write App",
//     complete:true,
//   },
// ]
function App() {
  //   const [todos,setTodos]=useState(initialTodos)
  //   const toggleTodo=(selectedTodo:Todo)=>{
  //     const newTodos=todos.map((todo)=>{
  //       if(todo===selectedTodo){
  //         return {
  //           ...todo,
  //           complete:!todo.complete,
  //         };
  //       }
  //       return todo
  //     })
  //     setTodos(newTodos)
  //   }
  //   const addTodo:AddTodo=(text:string)=>{
  //     const newTodo={text,complete:false}
  //     setTodos([...todos,newTodo])
  //   }
  //  const removeTodo:RemoveTodo=(selectedTodo:Todo) =>{
  //     let filteredArray = todos.filter(item => item !== selectedTodo)
  //     setTodos( filteredArray);
  // }
  // const updateTodo:UpdateTodo=(text:string,complete:boolean)=>{
  // let tempArray = [...todos];
  // const index = tempArray.map((element) =>element.text===text||complete);
  // // console.log(index)
  // return index;
  // // setTodos(index.);
  // }
  return (
    <div className="App">
      <ToastContainer
              draggable
              draggableDirection="x"
              transition={Flip}
            />
      <CssBaseline />
      <MainComponent />
      {/* <Notfound/> */}
      {/* <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      <AddTodoForm addTodo={addTodo} updateTodo={updateTodo}/> */}
    </div>
  );
}

export default App;
