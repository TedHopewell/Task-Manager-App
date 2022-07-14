import React from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";

function HomePage() {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default HomePage