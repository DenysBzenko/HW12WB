
import React from 'react';

function DayList({ days, onDayClick, selectedDay }) {
    return (
        <div className="day-list">
            {days.map(day => (
                <div 
                    key={day.dayName} 
                    onClick={() => onDayClick(day.dayName)}
                    className={`day-item ${selectedDay === day.dayName ? 'active' : ''}`}
                >
                    {day.dayName} ({day.tasks.length} завдань, приблизно {day.tasks.length * 30} хв.)
                </div>
            ))}
        </div>
    );
}

export default DayList;
