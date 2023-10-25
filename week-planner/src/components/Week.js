import React from 'react';
import Day from './Day';

const Week = ({ days }) => {
  return (
    <div className="d-flex flex-wrap">
      {days.map((day, index) => (
        <Day key={index} day={day} />
      ))}
    </div>
  );
};

export default Week;
