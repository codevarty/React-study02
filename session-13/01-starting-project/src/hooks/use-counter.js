import { useState, useEffect } from "react";

const uesCounter = (callback) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(callback);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default uesCounter;
