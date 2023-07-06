import { useState, useCallback} from "react";

// 공통된 부분을 넣음
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback을 사용하여 험수의 재생성을 막음
  const sendRequest = useCallback(async (requestConfig, applyData) => {
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
  },[]); //reauestConfig와 applyData는 매개변수이므로 의존성 배열에 넣지 않음

  return {
    isLoading,
    error,
    sendRequest,
  }
};

export default useHttp;