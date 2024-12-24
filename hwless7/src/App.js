
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-task" element={<AddTaskPage />} />
    </Routes>
  );
};

export default App;
