import React from "react";
import Chart from '../Chart/Chart';
const ExpensesChart = props => {
  // 객체를 받는다.
  const ChartDataPoints = [
  { label: 'Jan', value:0 }, 
  { label: 'Feb', value:0 }, 
  { label: 'Mar', value:0 }, 
  { label: 'Apr', value:0 }, 
  { label: 'May', value:0 }, 
  { label: 'Jun', value:0 }, 
  { label: 'Jul', value:0 }, 
  { label: 'Aug', value:0 }, 
  { label: 'Sep', value:0 }, 
  { label: 'Oct', value:0 }, 
  { label: 'Dec', value:0 }, 
];// props.expenses는 배열이기 때문에 in이 아닌 of를 사용한다.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    ChartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={ChartDataPoints}/>
};

export default ExpensesChart;