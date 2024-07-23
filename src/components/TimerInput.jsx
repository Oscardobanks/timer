import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TimerInput = ({ onSetCountdown }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const seconds = parseInt(inputValue, 10);
    if (!isNaN(seconds)) {
      onSetCountdown(seconds);
      setInputValue('');
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form className="timer-input-container" onSubmit={handleSubmit}>
      <input
        type="number"
        min="0"
        placeholder="Time in seconds"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Set Timer</button>
    </form>
  );
};

TimerInput.propTypes = {
  onSetCountdown: PropTypes.func.isRequired,
};

export default TimerInput;