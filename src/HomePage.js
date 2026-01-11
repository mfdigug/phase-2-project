import "./styles/HomePage.css";
import TaskCard from "./TaskCard";

function HomePage({ allTodos, onHandleDeleteTask, onHandleCheck }) {
  const day = new Date();
  const today = day.toDateString();

  const doToday = allTodos.filter(
    (todo) => todo.start.toDateString() === today
  );

  const todaysTasks = doToday.map((todo) => (
    <TaskCard
      key={todo.id}
      todo={todo}
      onHandleDeleteTask={onHandleDeleteTask}
      onHandleCheck={onHandleCheck}
    />
  ));

  return (
    <div className="home-page">
      <h3>Today's Tasks</h3>
      <div className="home-page-task-container">{todaysTasks}</div>
    </div>
  );
}

export default HomePage;
