import React from "react";

import '../Components/AddTask.css';

function AddTask() {
  return (
    <div className="AddTask">
        <div className="topPart">
            <h1>Jane Doe</h1>
            <button>LogOut</button>
        </div>

        <div className="bottomPart">
            <input type="text" placeholder="Add New Task" />
            <select name="priority" id="priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            <button>+</button>
        </div>
        
    </div>
  )
}

export default AddTask