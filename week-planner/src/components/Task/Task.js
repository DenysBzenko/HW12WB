import React from 'react';

function Task({ task }) {
    return (
        <div className="task">
            <p>{task.title}</p>
        </div>
    );
}

export default Task;
