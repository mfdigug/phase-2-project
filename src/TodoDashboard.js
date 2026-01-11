import "./styles/TodoDashboard.css";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function TodoDashboard({ allTodos, onHandleDeleteTask, onHandleCheck }) {
  const [filter, setFilter] = useState("All");
  const [isDueSoon, setIsDueSoon] = useState(true);

  function displayTodos() {
    if (filter !== "All") {
      return allTodos.filter((todo) => todo.category === filter);
    }
    if (isDueSoon) {
      return allTodos.sort((a, b) => new Date(b.start) - new Date(a.start));
    } else {
      return allTodos.sort((a, b) => new Date(a.start) - new Date(b.start));
    }
  }

  function handleCategoryFilterSelection(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  return (
    <div className="todo-dashboard">
      <h3>Task Dashboard</h3>

      <button onClick={() => setIsDueSoon(!isDueSoon)}>
        Sort:
        {isDueSoon 
        ? (<> Due Soon <FontAwesomeIcon icon={faArrowUp} /> </>) 
        : (<> Due Later <FontAwesomeIcon icon={faArrowDown} /> </>)
        }
      </button>

      <label htmlFor="category">Choose a category:</label>
      <select
        id="category"
        value={filter}
        onChange={(e) => handleCategoryFilterSelection(e)}
      >
        <option value="All">All</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="finance">Finance</option>
        <option value="social">Social</option>
      </select>

      <div class="todo-cards-container">
        {displayTodos().map((todo) => (
          <TaskCard
            key={todo.id}
            todo={todo}
            onHandleDeleteTask={onHandleDeleteTask}
            onHandleCheck={onHandleCheck}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoDashboard;
