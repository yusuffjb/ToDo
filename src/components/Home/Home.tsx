import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">Todo App</h1>
            <Link to="/add-task" className="link">
                Create Todo Task
            </Link>
            <Link to="/task-list" className="link">
                View Task List
            </Link>
        </div>
    );
};

export default HomePage;