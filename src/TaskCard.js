import { useState } from 'react'

function TaskCard({ todo }){

    const [isChecked, setIsChecked] = useState(todo.completed)

    function handleCheckBoxClick(){
        setIsChecked(!isChecked)
        // add PATCH request
    }


  return (
    <div style={{border: "solid 2px black", borderRadius: "5px", margin: "5px"}}>
        <label>
            <input type='checkbox' checked={isChecked} onChange={handleCheckBoxClick}/>
            {todo.title}
        </label>

        <p>{todo.category}</p> 
        <p>{todo.start.toLocaleString()}</p>
        
    </div>
  )
}

export default TaskCard