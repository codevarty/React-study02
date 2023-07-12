import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const formIsValid = enteredNameValid && enteredEmailValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // form의 기본 동작으로 브라우저가 자동적으로 새로침이 된다. 이 새로고침을 방지하기 위해서 사용한다.

    console.log(enteredName);

    if (!enteredNameValid || !enteredEmailValid) {
      return; // 입력된 값이 없으면 아무것도 하지 않는다.
    }

    resetNameInput(); // 입력된 값을 초기화

    resetEmailInput(); // 입력된 값을 초기화
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
