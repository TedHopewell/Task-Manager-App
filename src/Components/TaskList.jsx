import React from "react";
import '../Components/AddTask.css';

function TaskList() {
  return (
    <div className="taskList">

        <h1>Task List</h1>
        <div className="list">
            <span>Added list displayed here</span><button>COMPLETE</button>
            
        </div>
        
    </div>
  )
}

export default TaskList;