import React, { useState } from 'react';
import Button from 'src/components/Button/Button.js';

function NewTaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (taskName.trim()) {
            onAddTask({ id: Date.now(), title: taskName });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={taskName} 
                onChange={e => setTaskName(e.target.value)} 
                placeholder="Назва завдання" 
            />
            <Button type="submit">Додати завдання</Button>
        </form>
    );
}

export default NewTaskForm;
