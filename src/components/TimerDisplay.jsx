import React from 'react';
import PropTypes from 'prop-types';

const TimerDisplay = ({ remainingTime }) => {
  const formatTime = time => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-display-container">
      <p>{formatTime(remainingTime)}</p>
    </div>
  );
};

TimerDisplay.propTypes = {
  remainingTime: PropTypes.number.isRequired,
};

export default TimerDisplay;