// 공통 스타일을 가지고 있는 컴포넌트이다.
import './Card.css';
const Card = (props) => {
  // props.children은 컴포넌트 태그 사이의 내용을 가리킨다.
  // props.className은 클래스 지정을 위해 사용
  const classes = 'card ' + props.className;
  return (<div className={classes}>{props.children}</div>)
}
export default Card; 