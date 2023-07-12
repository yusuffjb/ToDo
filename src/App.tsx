import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Task from './components/Task/Task';
import Add from './components/add/Add';
import Home from './components/Home/Home';
import Footer from './components/Footer/footer'

const App: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (path: any) => {
    navigate(path);
  }

  const getData = (data: any) => {
    let existingData: any = localStorage.getItem('tasksData');
    let temp: any;
    if (existingData !== undefined && existingData !== null) {
      temp = [...JSON.parse(existingData), data]
    } else {
      temp = [data]
    }
    localStorage.setItem('tasksData', JSON.stringify(temp))
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={() => handleClick("/")}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-task" onClick={() => handleClick("/add-task")}>Add task</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="task-list" onClick={() => handleClick("/task-list")}>View task List</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<Add getData={getData} />} />
        <Route path="/task-list" element={<Task />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;