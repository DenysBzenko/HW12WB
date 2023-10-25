import React from 'react';
import Week from './components/Week';
import Day from './components/Day';
import Task from './components/Task';
import Button from './components/Button';

function App() {
  // Зараз ми просто створюємо фіктивні дані, щоб показати структуру. Вони будуть замінені реальними даними пізніше.
  const dummyDays = [
    { name: 'Monday', tasks: [{ title: 'Task 1', description: 'Do something', startTime: '09:00', endTime: '10:00' }] },
    // ... інші дні
  ];

  return (
    <div className="container">
      <Week days={dummyDays} />
      {/* Тут можуть бути інші компоненти, такі як DayExpanded, NewTaskForm тощо */}
    </div>
  );
}

export default App;
