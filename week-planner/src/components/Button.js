import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
