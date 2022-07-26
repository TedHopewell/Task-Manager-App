import React from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";
import LoginPage from "../Pages/LoginPage";
import SignInPage from "./SignInPage"; 

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function HomePage() {

 
  return (
   <div>
   
    <AddTask />
    <TaskList/>
   </div>
  )
}

export default HomePage;