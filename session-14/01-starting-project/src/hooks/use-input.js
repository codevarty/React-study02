import { useState } from 'react';

// 커스텀 훅을 이용하여 중복되는 코드를 줄인다.
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(""); 
  const [isTouched, setIsTouched] = useState("false");

  const valueValid = validateValue(enteredValue);
  const hasError = !valueValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);

  };

  const valueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  }


  return {
    value: enteredValue,
    isValid: valueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  }
};

export default useInput;
