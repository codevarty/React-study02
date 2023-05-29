# 리액트 state 및 이밴트 배우기
- name import
  - 라이브러리에서 이름이 지어진 것을 추출할 수 있다.
  - `import {name} from 'react'`
- default import
  - 기본적인 import 방법
  - `import React from 'react'`

## 1. state
- 사용자와 상호작용을 하는 동적인 웹 페이지를 만들기 위해 필요
- 별도의 state를 지정하지 않으면 컴포넌트는 정적인 웹 페이지로 한번의 state만 갖는다.
- 값을 변경하기 위해서는 state가 필요함
- 리액트는 보통 컴포넌트는 한번만 실행한다.
- state는 값이 변경 되면 컴포넌트를 다시 랜더링 한다.
- 상태를 저장하기 위해서 state를 사용한다.
- `useState()`는 컴포넌트를 랜더링하는 state를 생성한다.
  - React Hook으로 불린다.
  - 반드시 컴포넌트 함수 안에서 정의 되어야 한다.
  - 반환값으로 배열을 반환
  - 각 값은 state와 state를 변경하는 함수이다.
- `UseState()` 사용
  ```javascript
  import React, {useState} from 'react';
  function App() {
    // state에 기본값을 지정할 수 있다.
    // 의도치 않는 갑 할당을 피하기 위해 사용
    const [text, setText] = useState('Hello');
    return (
      <div className="App">
        <button onClick={()=> {setText('clicked')}}> click..</button>
        <p>{text}</p>
      </div>
    );
  }
  export default App;
  ```
  - text는 state 값이다. 기본값으로 Hello를 지정
  - setText는 state를 변경하는 함수이다. text를 정함
  - useState의 첫 번째 반환값은 현재 상태를 나타냄
  - 두번째 반환값은 상태를 업데이트하는 함수이다.
  - useState는 처음 랜더링 될 때 한번만 호출된다.
- state 값을 업데이트 하는 방법
  ```javascript
  // state 값을 업데이트 하는 방법
  const handleClick = () => {
    // setState를 사용하여 state 값을 변경
    // 인자 값에는 변경할 데이터가 들어간다.
    setText('clicked')
    console.log(text); // 'hello'가 출력 된다.
  }
  ...
  ```
    - state를 업데이트하는 함수가 실행되면 컴포넌트가 랜더링 된다.
    - 함수가 호출 되자마자 state가 변경되는 것이
    - useState는 자신의 state만 변경한다.



## 2. 이밴트
- addEventListener를 사용하지 않고도 이벤트를 다룰 수 있다.
- HTML의 이벤트 속성은 모두 on으로 시작한다.
- 모든 on props는 함수를 값으로 가진다.
- on props의 경우 동작이 되는 요소 모두 사용이 가능하다.
- 버튼을 클릭 했을 떄 이밴트를 발생 시킬려면 onClick={함수}을 사용한다.
  ```javascript
  // onClick 이벤트 값으로 함수를 전달
  <button onClick={()=> {console.log('clicked')}}> click..</button>
  // function 으로 전달
  <button onClick={function(){console.log('clicked')}}> click..</button>
  ```
  -  함수이름()를 전달 하면 JSX가 평가 될 때 실행
  -  함수 이름을 전달하면 클릭 이벤트가 발생할 때 실행

- 변수로 지정하여 변경하면 변경되지 않음
  ```javascript
  let text = props.text
  // 변수로 지정하여 변경하면 변경되지 않음
  const handleClick = () => {
    console.log('clicked');
    text = 'Hello'
  }
  <button onClick={handleClick}> text </button>
  ```
  - 컴포넌트도 함수이기 때문에 컴포넌트가 다시 반환되지 않는한 버튼이 내용은 변경되지 않는다.
  - 컴포넌트를 사용하는 것은 함수를 호충하는 것이다.

- form은 onSubmit을 통한 이벤트 발셍
  - button을 클릭했을 때 이벤트 발생
  ```javascript
  const handleSubmit = (event) => {
    // form의 기본 동작을 막는다.
    event.preventDefault();
    console.log('submitted');
  }
  <form onSubmit={handleSubmit}>
  // 버튼 코드...
  </form>
  ```
  - preventDefault()를 사용하여 새로고침을 방지
  - form 태그 안에 있는 button 태그를 클릭하면 submit 이벤트가 발생

## 3. state를 이용한 사용자 입력 리스닝
- input 태그에 onChange 이벤트를 사용하여 사용자 입력을 감지한다.
  - onChange 이벤트는 input 태그의 값이 변경될 때 마다 발생
  - input 태그에 값을 입력할 때 마다 이벤트가 발생
- onChange에 들어가는 함수 매개변수에 event를 지정하면 이벤트 객체를 받을 수 있다.
  - event.target.value를 사용하여 input 태그의 현재 값 접근 가능
  ```javascript
  const handleChange = (event) => {
    // input 태그의 입력 값 출력
    console.log(event.target.value);
  }
  <input type="text" onChange={handleChange} />
  ```
  - event.target은 이벤트가 발생한 요소를 가리킨다.

## 4. 여러개의 state를 객체로 관리
- useState의 초기값을 객체로 생성하여 여러개의 state를 관리 가능
  ```javascript
  // name, nickname 두개의 state를 객체로 관리
  const [userInput, setUserInput] = useState({
    name: '',
    nickname: ''
  });
  ```
  - 하나의 변수로 여러개의 값을 관리 가능
  - state를 업데이트 할 때는 기존의 값을 복사한 뒤 업데이트 해야 한다.
  ```javascript
  const handleChange = (event) => {
    // 기존의 값을 복사한 뒤 업데이트
    // 스프레드를 이용하여 기존 내용 복사
    setUserInput({
      ...userInput,
      name: event.target.value
    });
  }
  ```
  - 기존의 내용을 복사해서 state 유지
  - 스프레드를 사용하여 기존의 내용을 복사

- 이전 state에 의존적 일 때 콜백함수 사용
  - 콜백함수를 이용하여 state를 업데이트
  ```javascript
  const handleChange = (event) => {
    setUserInput((prev) => {
      return {
        ...prev,
        name: event.target.value
      }
    });
  }
  ```
  - 항상 최신의 상태로 업데이트 한다.

## 5. 양방향 바인딩
- 정의
  - 변경되는 입력 값만 수신하는 것이 아니라 입력에 새로운 값을 전달 할 수도 있는 것

- input 태그 양방향 바인딩
  - input 태그의 value 값에 state를 지정
  ```javascript
  <input type="text" value={text} onChange={handleChange} />
  ```
  - 버튼을 눌러 제출 했을 때 입력값을 다른 변수나 객체에 저장하고 입력값을 초기화
  - 새로운 값을 입력하기 편해짐
- 컴포넌트를 이용한 부모로 데이터 전송
  - props를 이용하여 자식에서 부모로 데이터 전송
  ```javascript
  //부모 컴포넌트
  const dataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString()
    }
    console.log(data);
  };
  return 
  ...
  <Component onData={dataHandler} />
  ```
  ```javascript
  // 자식 컴포넌트
  ...
  const data={
    name: 'name',
    age: 20
  }
  props.onData(data); // 부모로 데이토를 전송. 즉 부모의 함수를 사용
  ...
  ```
  - props의 onData에 부모의 함수를 전달
  - 자식의 데이터를 부모에 전달 가능

## 6. 그외 컴포넌트
- 프리젠테이셔널 또는 dump 컴포넌트 <-> 상태유지 컴포넌트
  - useState를 사용하지 않는 컴포넌트
  - 무상태 컴포넌트라고도 함
  - 단지 데이터를 출력하기만 함
  ```javascript
  const Component = (props) => {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </div>
    );
  }
  ```
  - 데이터를 출력하는 컴포넌트
  - 데이터를 출력하는 컴포넌트는 상태를 유지할 필요가 없다.
  - 대부분의 컴포넌트는 프리젠테이셔널 컴포넌트이다.

- 추가적 내용
  -  두 컴포넌트는 용도가 다를 뿐이다.