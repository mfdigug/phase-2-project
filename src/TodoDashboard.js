import "./styles/TodoDashboard.css";
import TaskCard from "./TaskCard";
import { useState } from "react";

function TodoDashboard({ allTodos, onHandleDeleteTask, onHandleCheck }) {
  const [filter, setFilter] = useState("All");

  function displayTodos() {
    if (filter === "All") {
      return allTodos;
    } else {
      return allTodos.filter((todo) => todo.category === filter);
    }
  }

  function handleCategoryFilterSelection(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  return (
    <div className="todo-dashboard">
      <h3>Task Dashboard</h3>

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
