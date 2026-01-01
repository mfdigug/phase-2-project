import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


function TaskCard({ todo, onHandleDeleteTask, onHandleEditTask, onHandleCheck }){
   
  const trash = <FontAwesomeIcon icon={faTrash} />
  const pencil = <FontAwesomeIcon icon={faPencil} />
    
  function handleCheckBoxClick(e) {
    

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
        fetch(`http://localhost:3000/allTodos/${todo.id}`, {
           method: "DELETE"
       })
      onHandleDeleteTask(todo.id)
    }


  return (
    <div style={{border: "solid 2px black", borderRadius: "5px", margin: "5px"}}>
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