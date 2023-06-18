import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

// {...props.input}은 아래와 같다.
// id={props.input.id}
// type={props.input.type}
// 즉 속성으로 전달된 객체의 속성들을 모두 전달한다.
