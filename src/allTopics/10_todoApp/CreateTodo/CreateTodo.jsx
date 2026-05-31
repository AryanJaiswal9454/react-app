import style from "./CreateTodo.module.css";
const CreateTodo = ({todo,setTodo,handelCreateTodo,editTodoId}) =>{
    return (
        <form className={style.TodoForm} onSubmit={handelCreateTodo}>
            <input type="text" name="todo" id="todo" placeholder="Enter a todo" value={todo} onChange={(e)=> setTodo(e.target.value)} />
            <button>{editTodoId ? "Update" : "Create"}</button>
        </form>
    );
};
export default CreateTodo;