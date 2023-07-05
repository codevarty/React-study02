import { useState, useEffect } from "react";

// 기본값 fowards=true
const uesCounter = (fowards=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (fowards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [fowards]);

  return counter;
};

export default uesCounter;
