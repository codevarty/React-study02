import styled from 'styled-components';

// styled-components를 사용하면 아래와 같이 CSS를 적용할 수 있다.
// button에 클래스명이 없으므로 안의 구문만 사용한다.
// styled-components에서 &는 가상의 선택자를 생성해서 사용한다는 의미
// 브라우저에 랜더링 될 대 고유의 클래스명이 생성된다.
// JSX 코드를 사용하지 않고 컴포넌트 생성
const Button = styled.button`
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #8b005d;
color: white;
background: #8b005d;
box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
cursor: pointer;

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
