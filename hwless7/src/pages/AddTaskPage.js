
import React, { useState } from "react";
import { addTask } from "../features/tasksSlice";
import {useDispatch} from "react-redux";

const AddTaskPage = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();


  const handleAddTask = () => {
    dispatch(addTask({id: Date.now(), text: task}));
    setTask("");
  };

  return (
    <div>
      <h1>Add Task</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTaskPage;
