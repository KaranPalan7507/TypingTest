import React, { useState, useEffect, useCallback } from "react";

export default function Timer({ seconds, timerEnded }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  let intervalId;
  useEffect(() => {
    if (!timeLeft) {
      timerEnded();
      clearInterval(intervalId);
      return;
    }

    intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <h1>{timeLeft}</h1>
    </div>
  );
}
