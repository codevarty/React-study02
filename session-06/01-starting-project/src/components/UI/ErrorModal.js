import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
// 재사용 가능한 컴포넌트로 구축함으로써 전체 UI를 구성할 수 있다.
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
