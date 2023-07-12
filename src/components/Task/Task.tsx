import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Task.css';

interface Task {
    id: number;
    title: string;
}

const TaskListPage = ({ taskData, ...props }: any) => {
    const tasksData: string = localStorage.getItem('tasksData') ?? '';
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (localStorage?.getItem('tasksData') && tasksData !== 'undefined' && tasksData !== null) {
            setTasks(JSON.parse(tasksData));
        }
    }, [])

    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1 className="title">Task List</h1>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                        <button className="add-button btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/" className="link">
                Go back
            </Link>
        </div>
    );
};

export default TaskListPage;