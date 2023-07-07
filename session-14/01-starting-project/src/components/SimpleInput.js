import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef(); 
  const [enteredName, setEnteredName] = useState(""); // // 입력된 값을 초기화할 때 사용

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // form의 기본 동작으로 브라우저가 자동적으로 새로침이 된다. 이 새로고침을 방지하기 위해서 사용한다.
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName(""); // 입력된 값을 초기화
    // Ref를 통해서 값 초기화가 가능하나 실제 DOM을 조작하는 것이기 때문에 권장하지 않는다. => 일반 자바스크립트 방법 사용
    // nameInputRef.current.value = ""; // 입력된 값을 초기화
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
