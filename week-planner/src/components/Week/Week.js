import React, { useState } from 'react';
import Day from '../Day/Day.js'; 
import NewTaskForm from '../NewTaskForm/NewTaskForm.js'; 

function Week() {
    const [tasks, setTasks] = useState([
        { dayName: 'Понеділок', tasks: [] },
        { dayName: 'Вівторок', tasks: [] },
        { dayName: 'Середа', tasks: [] },
        { dayName: 'Четвер', tasks: [] },
        { dayName: 'Пятниця', tasks: [] },
        { dayName: 'Субота', tasks: [] },
        { dayName: 'Неділя', tasks: [] },
    ]);

    const handleAddTask = (dayName, task) => {
        const updatedTasks = tasks.map(day => {
            if (day.dayName === dayName) {
                day.tasks.push(task);
            }
            return day;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="week">
            {tasks.map(day => (
                <div key={day.dayName}>
                    <Day dayName={day.dayName} tasks={day.tasks} />
                    <NewTaskForm onAddTask={task => handleAddTask(day.dayName, task)} />
                </div>
            ))}
        </div>
    );
}

export default Week;
