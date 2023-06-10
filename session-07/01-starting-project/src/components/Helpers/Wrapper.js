const Wrapper = (props) => {
  // props.children 은 Wrapper 태그 사이에 있는 내용을 의미한다.
  // 단지 내용을 감싸는 용도로만 사용한다. JSX 상으로 아무런 문제가 없다.
  return props.children;
}

export default Wrapper;