import { useState } from "react";

// 공통된 부분을 넣음
const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data); // applyData 함수에 data를 전달하여 처리하도록 함
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  }
};

export default useHttp;