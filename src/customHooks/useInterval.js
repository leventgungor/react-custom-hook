import { useState, useEffect } from "react";

export default (handler, interval, start = true) => {
  const [intervalId, setIntervalId] = useState();
  useEffect(() => {
    if (start) {
      const id = setInterval(handler, interval);
      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, []);
  return () => clearInterval(intervalId);
};