import React, { useState, useEffect } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import './App.css';

const App = () => {
  const [countdown, setCountdown] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalid;

    // Use an effect to update the remaining time every second if the timer is running
    if (isRunning) {
      intervalid = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(intervalid);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Clean up the interval when the component unmounts or when isRunning changes
    return () => {
      clearInterval(intervalid);
    };
  }, [isRunning]);

  const handleStart = () => {
    if (countdown > 0 && !isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(0);
  };

  const handleSetCountdown = seconds => {
    if (!isRunning) {
      setCountdown(seconds);
      setRemainingTime(seconds);
    }
  };

  return (
    <div className="app-container">
      <h1>Countdown Timer</h1>
      {/* Timer input component */}
      <TimerInput onSetCountdown={handleSetCountdown} />
      {/* Timer display component */}
      <TimerDisplay remainingTime={remainingTime} />
      {/* Timer controls component */}
      <TimerControls
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;