import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(""); // // 입력된 값을 초기화할 때 사용
  const [enteredNameTouched, setEnteredNameTouched] = useState("false");

  const [enteredEmail, setEnteredEmail] = useState(""); // // 입력된 값을 초기화할 때 사용
  const [enteredEmailTouched, setEnteredEmailTouched] = useState("false");

  // enteredName이 리 랜더링 될 때마다 아래의 코드가 실행된다.
  const enteredNameValid = enteredName.trim() !== "";
  const enteredEmailValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailValid && enteredEmailTouched;
  const formIsValid = enteredNameValid && enteredEmailValid;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // 즉각적인 유효성 검사를 위해 event.target.value를 사용한다.
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // form의 기본 동작으로 브라우저가 자동적으로 새로침이 된다. 이 새로고침을 방지하기 위해서 사용한다.

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameValid || !enteredEmailValid) {
      return; // 입력된 값이 없으면 아무것도 하지 않는다.
    }

    setEnteredName(""); // 입력된 값을 초기화
    setEnteredEmail(""); // 입력된 값을 초기화
    setEnteredEmailTouched(false);
    setEnteredNameTouched(false);
  };

  const formInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const formInputClasses2 = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      <div className={formInputClasses2}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      {emailInputIsInvalid && (
        <p className="error-text">Email must not be empty and include @</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
