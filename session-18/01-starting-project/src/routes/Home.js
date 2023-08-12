import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  // useNavigate() hook을 사용하면, react-router-dom의 <Link> 컴포넌트를 사용하지 않고도
  // 페이지를 이동할 수 있다.
  // 프로그램적으로 페이지를 이동하고 싶을 때 사용한다.
  //(ex) 타이머로 일정 시간 후 자동 페이지 이동)
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  };

  return (
    <>
      <h1>Home Page!</h1>
      <p>
        Go to <Link to='/products'>the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
