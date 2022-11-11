interface Todo{
    text:string;
    complete:boolean;
}

type ToggleTodo=(selectedTodo:Todo)=>void;
type AddTodo=(text:sting)=>void;
type RemoveTodo=(selectedTodo:Todo)=>void;
type UpdateTodo=(text:sting, complete:boolean)=>void;
    
