import React from 'react';
import Scorm from '../scorm/Scorm';

const Button: React.FC = () => {
  const handleClick = () => {
    Scorm.setScore(100, 100);
  };

  return (
    <button onClick={handleClick}>
      Send Score 100/100 to SCORM
    </button>
  );
};

export default Button;
