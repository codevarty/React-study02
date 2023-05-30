// 비용 아이템 지정
import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// props 객체 매개 변수를 사용하여 데이터를 전달
const ExpenseItem = (props) => {
  // 무상태 컴포넌트는 읽기 전용이므로 상태를 변경할 수 없다.
  return (
    <Card className="expense-item">
      <ExpenseDate
        date = {props.date}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
// 다른 파일에서 사용할 수 있도록 export
export default ExpenseItem;
