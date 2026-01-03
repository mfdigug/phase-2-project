import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles/TaskCards.css"
import { faHouse, faUserGroup, faSackDollar, faBriefcase, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

function TaskCard({ todo, onHandleDeleteTask, onHandleEditTask, onHandleCheck }){
   
  const trash = <FontAwesomeIcon icon={faTrash} />

  const { title, category, start } = todo;

  function categoryIcon(category) {
    if (category === "home") {
      return <FontAwesomeIcon icon={faHouse} />
    } else if (category === "social") {
      return <FontAwesomeIcon icon={faUserGroup} />
    } else if (category === "finance") {
      return <FontAwesomeIcon icon={faSackDollar} />
    } else if (category === "work") {
      return <FontAwesomeIcon icon={faBriefcase} />
    }
  }
  
    
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
            {title}
        </label>

        <div className="category-label">{category}{categoryIcon(category)}</div> 
        <p>{start.toLocaleString()}</p>
        {/* <button onClick={handleEdit}>{pencil}</button> */}
        <button onClick={handleDelete}>{trash}</button>

        
    </div>
  )
}

export default TaskCard