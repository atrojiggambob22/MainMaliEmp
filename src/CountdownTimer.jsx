import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('April 27, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="countdown">
        <h1>It's April 27, 2026!</h1>
      </div>
    );
  }

  return (
    <div className="countdown">
      <h1>Countdown to April 27, 2026</h1>
      <div className="timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;