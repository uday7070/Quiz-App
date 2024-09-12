import React, { useState, useEffect } from "react";

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // If timeLeft is 0, stop the timer and call the onTimeUp function
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Timer countdown
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the interval on component unmount or when timeLeft changes
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div style={{ fontSize: "20px", fontWeight: "bold", margin: "10px 0" }}>
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
