import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
// 컴포넌트 안에 정의된 내용들을 사용하지 않음
// state 매개변수는 이전 state를 가리킴 즉 최신 상태의 state이다.
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if (action.type === 'INPUT_BLUR') {
    return {value:state.value, isValid: state.value.includes('@')};
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value:"",
    isValid: null
  })

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("E-RUNNING!");
    return () => {
      console.log("E-CLEANUP");
    };
  }, []);

  // 별칭 할당 방법 key: value로 디스트럭처링 할당
  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(()=>{
    // 500 밀리 초 후에 실행
    // 타이머가 한번에 하나만 이용하도록 한번 실행 이후 타이머를 제거해야 함
    const identifier = setTimeout(()=>{
      console.log('Checking form validity!');
    setFormIsValid(
      emailIsValid && passwordIsValid
    );
    }, 500);
    // 함수를 반환한다.
    return () => {
      console.log('CLEANUP')
      // 실행 되기전 차이머를 제거함 -> 하나의 타이머만 실행되도록 함
      clearTimeout(identifier);
    };
    // [emailState, passwordState] : 이 두개의 state가 변경될 때마다 실행, 값이 이미 유효한 상태에도 실행됨
    //[emailIsValid, passwordIsValid] : 이 두개의 state가 변경될 때마다 실행 즉 각 객체의 isValid 값이 변경될 때마다 실행
  },[emailIsValid, passwordIsValid]);
  // [] : 앱이 처음 실행될 때만 실행

  const emailChangeHandler = (event) => {
    // 보통 객체를 반환
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   // 두개의 다른 state를 사용하기 때문에 함수 형식으로 사용 불가
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    // 반드시 value를 사용할 필요가 없다.
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
