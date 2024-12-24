
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {removeTask} from "../features/tasksSlice";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const handleRemoveTask = (id) => {
      dispatch(removeTask(id));
  }
  return (
    <div>
      <h1>Task List</h1>
        <h1>Task List</h1>
        {tasks.length === 0 ? (
            <p>No tasks available. Add a new task!</p>
        ) : (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        )}
      <Link to="/add-task">Add Task</Link>
    </div>
  );
};

export default Home;
