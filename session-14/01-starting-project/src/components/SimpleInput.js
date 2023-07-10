import { useState, useRef, useEffect } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState(""); // // 입력된 값을 초기화할 때 사용
  const [enteredNameValid, setEnteredNameValid] = useState("true");
  const [enteredNameTouched, setEnteredNameTouched] = useState("false");

  useEffect(() => {
    if (enteredNameValid) {
      console.log("Name Input is valid!");
    }
  }, [enteredNameValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameValid(false); // 유효성 검사를 통과하지 못하면 false
      return; // 입력된 값이 없으면 아무것도 하지 않는다.
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // form의 기본 동작으로 브라우저가 자동적으로 새로침이 된다. 이 새로고침을 방지하기 위해서 사용한다.

    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameValid(false); // 유효성 검사를 통과하지 못하면 false
      return; // 입력된 값이 없으면 아무것도 하지 않는다.
    }
    setEnteredNameValid(true); // 유효성 검사를 통과하면 true
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName(""); // 입력된 값을 초기화
    // Ref를 통해서 값 초기화가 가능하나 실제 DOM을 조작하는 것이기 때문에 권장하지 않는다. => 일반 자바스크립트 방법 사용
    // nameInputRef.current.value = ""; // 입력된 값을 초기화
  };
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;
  const formInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
