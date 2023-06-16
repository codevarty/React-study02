import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// forwardRef를 사용하면 부모 컴포넌트에서 ref를 사용할 수 있다.
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // useEffect(()=>{
  //   inputRef.current.focus();
  // }, []);

  const activate = () => {
    inputRef.current.focus();
  };

  // useImperativeHandle은 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출할 수 있게 해준다.
  useImperativeHandle(ref, () => {
    // 이 함수는 Input 컴포넌트를 사용하는 부모 컴포넌트에서 focus()를 호출하면 실행된다.
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
