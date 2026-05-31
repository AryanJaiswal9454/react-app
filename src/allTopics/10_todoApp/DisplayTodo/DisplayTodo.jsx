import style from "./DisplayTodo.module.css";
const DisplayTodo = ({allTodos,handelDeleteTodo,handelEditTodo}) =>{
    console.log(allTodos);
    
    return (
             <div className={style.todosContainer}>
            {allTodos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        <section className={style.todosWrapper}>
          {allTodos.map((todo) => {
            let { id, text } = todo;
            return (
              <div key={id} className={style.todo}>
                <h3>{text}</h3>
                <button className={style.editBtn} onClick={() => handleEditTodo(id)}>Edit</button>
                <button className={style.deleteBtn} onClick={() => handleDeleteTodo(id)}>Delete</button>
              </div>
            );
            s;
          })}
        </section>
      )}
    </div>
    );
};
export default DisplayTodo
