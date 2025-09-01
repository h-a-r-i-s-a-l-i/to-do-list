import './App.css';
import { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([])

    function handleAddTask() {
        const taskName = document.getElementById("task").value

        setTasks(t => [...t, { Name: taskName }])
        document.getElementById("task").value = ""
    }

    function handleRemoveTask(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }
    return (<div>
        <h1 className="heading">To-do-list</h1>
        <div className="input-box">
            <input type="text" id="task" placeholder="Add Task..." />
            <button className="add-task-button" onClick={handleAddTask}>Add</button>
        </div>

        {tasks.map((task, index) => (
            <div className="task-box" key={index}>
                <div className="task-title">{task.Name}</div>
                <button className="deleteTaskButton" onClick={() => handleRemoveTask(index)}>Delete</button>
            </div>
        ))}
    </div>)
}

export default ToDoList;