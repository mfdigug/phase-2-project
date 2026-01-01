import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


function TaskCard({ todo, onHandleDeleteTask, onHandleEditTask }){

    const [isChecked, setIsChecked] = useState(todo.completed)
    const trash = <FontAwesomeIcon icon={faTrash} />
    const pencil = <FontAwesomeIcon icon={faPencil} />
    
    function handleCheckBoxClick(){
        setIsChecked(!isChecked)
        // add PATCH request
    }

    function handleEdit(){
      onHandleEditTask(todo.id)
    }

    function handleDelete(){
      onHandleDeleteTask(todo.id)
    }


  return (
    <div style={{border: "solid 2px black", borderRadius: "5px", margin: "5px"}}>
        <label>
            <input type='checkbox' checked={isChecked} onChange={handleCheckBoxClick}/>
            {todo.title}
        </label>

        <p>{todo.category}</p> 
        <p>{todo.start.toLocaleString()}</p>

        <button onClick={handleEdit}>{pencil}</button>
        <button onClick={handleDelete}>{trash}</button>

        
    </div>
  )
}

export default TaskCard