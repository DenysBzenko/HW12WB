import React from 'react';
import Task from '../Task/Task.js';

function Day({ dayName, tasks }) {
    return (
        <div className="day">
            <h2>{dayName}</h2>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    );
}

export default Day;
