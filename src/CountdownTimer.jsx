// CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Optional, if you separate styles

const CountdownTimer = () => {
  const targetDate = new Date("2025-08-24T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const gap = targetDate - now;

      const d = Math.floor(gap / (1000 * 60 * 60 * 24));
      const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
      const m = Math.floor((gap / (1000 * 60)) % 60);
      const s = Math.floor((gap / 1000) % 60);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h2 className="heading">Festival Begins In</h2>
      <div className="countdown">
        <div className="unit">
          <span>{timeLeft.days}</span>
          <p>Moons</p>
        </div>
        <div className="separator">☉</div>
        <div className="unit">
          <span>{timeLeft.hours}</span>
          <p>Sands</p>
        </div>
        <div className="separator">☉</div>
        <div className="unit">
          <span>{timeLeft.minutes}</span>
          <p>Moments</p>
        </div>
        <div className="separator">☉</div>
        <div className="unit">
          <span>{timeLeft.seconds}</span>
          <p>Drumbeats</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;