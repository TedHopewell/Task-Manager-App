import React from "react";
import '../Components/AddTask.css';

function TaskList() {
  return (
    <div className="taskList">

        <h1>Task List</h1>
        <div className="tasks">
           {
                
                items.map(item=>((
                  <div className="items" key={item.id}>
                        {
                          item.priority == "Low" ? (
                            <div className="item" style={{borderBottom: "3px solid green"}}>
                                  <span>{item.task}</span>
                                  <button>Complete</button>
                            </div>
                          ):item.priority == "Medium" ? (
                            <div className="item" style={{borderBottom: "3px solid orange"}}>
                                  <span>{item.task}</span>
                                  <button>Complete</button>
                            </div>
                          ):item.priority == "High" ? (
                            <div className="item" style={{borderBottom: "3px solid Red"}}>
                                  <span>{item.task}</span>
                                  <button>Complete</button>
                          </div>
                          ):(
                            <div>
                              
                            </div>
                          )
                          
                        }
                  </div>
                )))
           }
            
        </div>
        
    </div>
  )
}

export default TaskList;