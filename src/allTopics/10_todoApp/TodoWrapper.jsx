import style from "./TodoWrapper.module.css"
import CreateTodo from "./CreateTodo/CreateTodo";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import { useState } from "react";
const TodoWrapper =()=>{
    const [todo,setTodo]=useState("");
    const [allTodos,setAllTodos]=useState(
        () => { let todos =localStorage.getItem("todos");
             return todos ? JSON.parse(todos) : []; }
    );

    console.log(allTodos);

    const [editTodoId,setEditTodoId]=useState(null);
    

    const handelCreateTodo = (e) => {
        e.preventDefault()
        console.log("todo created");
        if(editTodoId){
            const updatedTodos = allTodos.map((ele) => {
                if (ele.id === editTodoId){
                    return {...ele,text : todo.trim()};
                }
                return ele
            });
            setAllTodos(updatedTodos)

            localStorage.setItem("todos",JSON.stringify(updatedTodos));
            setTodo("");
            setEditTodoId(null);
            return;
        }

        let newTodo ={
            id: Date.now(),
            text: todo.trim(),
        };
        console.log(newTodo);

        // persisting new todo in local storage
        
        const todos=JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(newTodo);
        localStorage.setItem("todos",JSON.stringify(todos));
        setAllTodos(todos)

        //claering input
        setTodo("");
    };


    const handelDeleteTodo=(id) =>{
        let todos=[...allTodos]
        let FilterTodos= todos.filter((ele) => ele.id !== id);
        setAllTodos(FilterTodos);
        localStorage.setItem("todos",JSON.stringify(FilterTodos));
        
    };

    const handelEditTodo =(id) => {
        const todos=[...allTodos];
        setEditTodoId(id);
        const todoToBeEditied =todos.find((ele) => ele.id === id);
        setTodo(todoToBeEditied.text);
        setEditTodoId(id);
    };
    return(
        <main className={style.wrapper}>
            <h1 className={style.heading}>Todo App</h1>
            <CreateTodo todo={todo} setTodo={setTodo} handelCreateTodo={handelCreateTodo} editTodoId={editTodoId}/>
            <DisplayTodo allTodos={allTodos} handelDeleteTodo={handelDeleteTodo} handelEditTodo={handelEditTodo}/>
        </main>
    );
    
};
export default TodoWrapper