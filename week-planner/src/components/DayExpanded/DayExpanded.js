import React from 'react';
import Task from 'src/components/Task/Task.js';

function DayExpanded({ dayName, tasks }) {
    return (
        <div className="day-expanded">
            <h2>{dayName}</h2>
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </div>
    );
}

export default DayExpanded;
