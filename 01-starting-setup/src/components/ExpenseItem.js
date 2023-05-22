// 비용 아이템 지정
import './ExpenseItem.css';
// props 객체 매개 변수를 사용하여 데이터를 전달
function ExpenseItem(props) {
  // toLocaleString() 함수는 날짜 객체를 특정 언어에 맞는 문자열로 변환
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  // getFullYear() 함수는 날짜 객체의 연도를 4자리로 반환
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// 다른 파일에서 사용할 수 있도록 export
export default ExpenseItem;
