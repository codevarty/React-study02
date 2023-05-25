// 비용 아이템 지정
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// props 객체 매개 변수를 사용하여 데이터를 전달
const ExpenseItem = (props) => {
  // state를 생성하고 초기값을 설정
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    // state를 업데이트 -> 컴포넌트가 다시 랜더링 된다.
    setTitle('Updated!');
    console.log(title); // 업데이트 되기 전의 값이 출력
  }

  return (
    <Card className="expense-item">
      <ExpenseDate
        date = {props.date}
      />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
// 다른 파일에서 사용할 수 있도록 export
export default ExpenseItem;
