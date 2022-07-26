import React, { useState } from "react";

import '../Components/AddTask.css';

import {db} from '../Config-file/firebase';

import {addDoc, collection, Transaction} from 'firebase/firestore'
import { transform } from "framer-motion";

function AddTask() {

  
  const [task, setTask] = useState("");
  const [priorityType, setPriorityType] = useState("");

  const add = (()=>{

      const collectionRef = collection(db, "tasks");

      const tasks = {
        task:task,
        priorityType:priorityType
      };

      addDoc(collectionRef, tasks).then(()=>{
        alert("Added successfully")
      }).catch((error)=>{
        console.log(error);
      })

  })






  return (
    <div className="AddTask">
        <div className="topPart">
            <h1>Jane Doe</h1>
            <button>LogOut</button>
        </div>

        <div className="bottomPart">
            <input type="text" placeholder="Add New Task" onChange={(e)=>setTask(e.target.value)}/>
            <select name="priority" id="priority" onChange={(e)=>setPriorityType(e.target.value)}>
                <option >Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

            </select>
            <button onClick={add}>+</button>
        </div>
        
    </div>
  )
}

export default AddTask;