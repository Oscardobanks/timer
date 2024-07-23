import React from 'react';
import PropTypes from 'prop-types';

const TimerControls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div className="timer-controls-container">
      <button className='start' onClick={onStart} disabled={isRunning}>
        Start
      </button>
      <button className='pause' onClick={onPause} disabled={!isRunning}>
        Pause
      </button>
      <button className='reset' onClick={onReset}>Reset</button>
    </div>
  );
};

TimerControls.propTypes = {
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};

export default TimerControls;