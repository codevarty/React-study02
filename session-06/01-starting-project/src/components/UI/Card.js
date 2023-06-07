// React문은 작성하지 않아도 된다.
import React from 'react';
import classes from './Card.module.css';
// 공통된 스타일 부분을 가지는 스타일 컴포넌트
const Card = (props) => {
  // props.className은 Card 컴포넌트에 적용하는 속성이 온다.
  const card = `${classes.card} ${props.className}`;
  return (
    // props.children은 Card 컴포넌트 태그 사이에 있는 내용을 의미한다.
    <div className={card}>{props.children}</div>
  );
};

export default Card; 