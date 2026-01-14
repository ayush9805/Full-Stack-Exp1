import { useState } from "react";
import "./todolist.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
    setError("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-box">
      <h2>📝 To-Do List</h2>

      <div className="input-area">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {error && <p className="error">{error}</p>}

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{index + 1}. {t}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty">No tasks added yet</p>
      )}
    </div>
  );
}

export default TodoList;
