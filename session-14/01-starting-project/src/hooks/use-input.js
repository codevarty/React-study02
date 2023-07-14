import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

// state 대신 reducer를 사용한다.
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    // state.isTouched는 이전 상태의 isTouched를 의미한다.
    return {value: action.value, isTouched: state.isTouched}
  }
  if (action.type === 'BLUR') {
    // input이 blur 되면 isTouched를 true로 변경한다.
    // 이 때 값은 변경 되지 않으므로 state.value를 그대로 사용한다.
    return {isTouched: true, value: state.value}
  }
  if (action.type === 'RESET') {
    // 값을 초기화 한다.
    return {isTouched: false, value: ''};
  }
  return inputStateReducer;
};

// 커스텀 훅을 이용하여 중복되는 코드를 줄인다.
const useInput = (validateValue) => {
  const [inputState, dispatch] =useReducer(inputStateReducer, initialInputState);


  const valueValid = validateValue(inputState.value);
  const hasError = !valueValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  };

  const valueBlurHandler = (event) => {
    dispatch({type: 'BLUR'});
  };

  // reset 함수는 값과 터치 여부를 초기화한다.
  const reset = () => {
    dispatch({type: 'RESET'});
  };

  return {
    value: inputState.value,
    isValid: valueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
