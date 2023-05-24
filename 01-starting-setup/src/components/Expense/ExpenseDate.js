// component for date
import './ExpenseDate.css'
function ExpenseDate(props) {
  // toLocaleString() 함수는 날짜 객체를 특정 언어에 맞는 문자열로 변환
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // getFullYear() 함수는 날짜 객체의 연도를 4자리로 반환
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
