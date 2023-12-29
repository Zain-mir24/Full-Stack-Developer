import React, { useState, useEffect } from "react";
import "./index.css";
export const Clock = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      handleDate();
    }, 1000);
  }, []);

  const handleDate = () => {
    try {
      const date = new Date();
      let current_hour = date.getHours();
      let current_seconds = date.getSeconds();
      let current_minute = date.getMinutes();
      
      setTime({
        hours: current_hour,
        seconds: current_seconds,
        minutes: current_minute,
      });

    } catch (e) {}
  };
  const seconds_style = `rotate(${time.seconds * 6}deg)`;
  const minutes_style = `rotate(${time.minutes * 6}deg)`;
  const hours_style = `rotate(${time.hours * 20}deg)`;
  return (
    <div className="clock">
      <p>Clock</p>
      <div className="analog-clock">
        <div className="seconds" style={{ transform: seconds_style }}></div>
        <div className="minutes" style={{ transform: minutes_style }}></div>
        <div className="hours" style={{ transform: hours_style }}></div>
      </div>
    </div>
  );
};
