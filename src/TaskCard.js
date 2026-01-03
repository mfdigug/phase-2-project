import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import "./styles/TaskCards.css"

function TaskCard({ todo, onHandleDeleteTask, onHandleEditTask, onHandleCheck }){
   
  const trash = <FontAwesomeIcon icon={faTrash} />
  const pencil = <FontAwesomeIcon icon={faPencil} />
    
  function handleCheckBoxClick(e) {
    
    console.log(typeof todo.id);

    fetch(`http://localhost:3000/allTodos/${todo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed: !todo.completed })
    })
    .then(r => r.json())
    .then(updatedTodo => onHandleCheck(updatedTodo.id))
    }

    // function handleEdit(){

    // }
    
    function handleDelete(){
        fetch(`http://localhost:3000/allTodos/${String(todo.id)}`, {
           method: "DELETE",
       })
        .then(response => {
          if (!response.ok) throw new Error("Delete failed");
          onHandleDeleteTask(todo.id);
      })
        .catch(err => {
        console.error(err);
        alert("Could not delete task");
      });
    }


  return (
    <div className="task-card-container">
        <label>
            <input type='checkbox' checked={todo.completed} onChange={(e) => handleCheckBoxClick(e)}/>
            {todo.title}
        </label>

        <p>{todo.category}</p> 
        <p>{todo.start.toLocaleString()}</p>

        {/* <button onClick={handleEdit}>{pencil}</button> */}
        <button onClick={handleDelete}>{trash}</button>

        
    </div>
  )
}

export default TaskCard