# 리액트 기초 및 실습 컴포넌트
- 리액트는 사용자 인터페이스를 쉽게 만들어 주는 라이브러리이다.
- 리액트는 컴포넌트로 이루어져 있다.
## 1. 컴포넌트
- 정의
  - 모든 사용자 인터페이스가 컴포넌트로 이루어져 있다.
  - 컴포넌트는 html, css, js 의 결합이다. 그 중 html 과 자바스크립트의 결합이 가장 중요하다.
  - 모든 종류의 웹 애플리케이션은 컴포넌트로 나눌 수 있다.
  - JSX를 통한 사용자 정의 HTML 이다.
  - 컴포넌튼는 개발자가 원하는 모양을 나타낸다.
- 특징
  - 재사용성이 뛰어남
  - 우려 사항 분리: 코드 베이스를 작고 관리 가능한 단위로 유지할 수 있게 함
  - 마치 함수를 작성하듯이 컴포넌트도 이 함수의 특징을 가짐
- 선언적 접근 방식
  - 리액트는 선언적 접근 방식을 사용
  - 선언적 접근 방식은 코드를 예측 가능하고 디버깅이 쉽게 만들어 줌
  - 실제 웹페이지에 언떤 요소가 추가 되고, 삭제 되거나 업데이트 되는지 해결

## 2. create-react-app
- 리액트 앱을 만들기 위한 환경을 제공해주는 도구
- 실시간으로 코드를 수정하면 화면에 바로 반영
- 설치 방법
  - `npx create-react-app [폴더 이름]`
  - npm install 명령어가 먼저 실행 된다.
- 폴더 구성 요소
  - node_modules: 프로젝트에서 사용하는 모듈이 저장되는 폴더
  - public: 정적 파일을 저장하는 폴더
  - src: 리액트 앱의 소스 코드를 저장하는 폴더
  - package.json: 프로젝트의 정보를 저장하는 파일
- 실행 방법
  - `npm start`
  - 구동을 중지 하려면 ctrl + c 키 입력
- npm install
  - package.json 파일을 보고 프로젝트 폴더에 필요한 모든 패키지를 설치
- npm start
  - 작성한 리액트 파일을 보고 브라우저에 실행 될 수 있게 코드를 변경하는 작업을 함
  - 모든 브라우저에서 실행할 수 있음
  - index.js 파일이 먼저 실행
- npm run build
  - 프로덕션 모드로 앱을 빌드
  - 빌드된 파일은 build 폴더에 저장
  - 빌드된 파일은 서버에 배포에 사용

## 3. SPA (Single Page Application)
- SPA는 하나의 페이지로 이루어진 애플리케이션
- create-react-app 에서 public 폴더 안에 있는 index.html이 SPA의 역할을 함
- 오직 한 개의 파일만을 브라우저에 로드
  ```html
  <body>
    <div id="root"></div>
  </body>
  ```
  - index.html 파일에 id가 root인 div 태그 존재
  - react의 모든 인터페이스는 이 div 태그 안에 랜더링
- index.js 파일에서 index.html 파일로 랜더링
  ```javascript
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />); // App.js 파일을 root div 태그 안에 랜더링
  ```
  - App은 컴포넌트
  - id가 root인 div 태그 안에 App 컴포넌트를 랜더링

## 4. JSX
- 정의
  - JSX는 자바스크립트의 확장 문법
  - 자바스크립트 XML을 의미

- 특징
  - 개발자가 작성하기 쉬움
  - 브라우저에서 실행될 수 있도록 코드가 변환됨 -> 최종적으로 HTML로 변환
  - 리액트에서 작성된 코드는 웹브라우저에 실핼 될 수 있도록 변환됨
  - JSX는 HTML이 아니라 자바스크립트이다.
  - JSX는 자바스크립트 확장판으로 안에 자바스크립트 코드를 작성할 수 있다.
  ```javascript
  // class는 자바스크립트 예약어이므로 className으로 작성
  // 중괄호 {}를 이용하여 안에 자바스크립트 코드 작성 가능
  ...
  <div className="class-name">
    {1+1}
  </div>
  ```

## 5. 컴포넌트 만들기
- 명령형 접근 방식
  - 결과를 얻기 위한 과정에 집중한다.
  - 일반적인 자바스크립트 코드
  - 코드가 복잡해지고, 유지보수가 어려워짐
  ```javascript
  // 하나의 요소를 만들 때 마다 아래의 과정을 거친다.
  const para = document.createElement('p');
  para.textContent = 'This is also visible!';
  document.getElementById('root').append(para);
  ```
- 선언형 접근 방식
  - 원하는 결과(UI)를 정의하고 라이브러리가 이를 처리
  - 리액트에서 사용하는 코드
  - 코드가 간결해지고, 유지보수가 쉬워짐
  ```javascript
  function App() {
    return (
      <div>
        <p>This is also visible!</p>
      </div>
    )
  }
  // Arrow Function 위의 코드와 기능이 같다.
  const App = () => {
    return (
      <div>
        <p>This is also visible!</p>
      </div>
    )
  }
  ```
- 사용자 지정 컴포넌트 만들기
  - 컴포넌트 당 하나의 파일을 만들어야 함
  - 새로운 컴포넌트를 만들기 위해 `src` 폴더 안에 `components` 폴더를 생성하고 이 폴더 안에 컴포넌트 파일 생성
  - `App.js` 파일은 루트 컴포넌트(최상위 컴포넌트)
  - 컴포넌트 트리 구조를 가짐
    - 컴포넌트가 계층 구조를 가지고 있음
    - 루트 컴포넌트 만이 HTML 파일에 직접 랜더링 됨
  - 함수로 만들어진 컴포넌트를 html 태그처럼 사용
  - 캄포넌트는 반드시 첫 글자를 대문자로 작성
    - 소문자로 시작하면 html 태그로 인식
  - 컴포넌트 안의 요소를 만들 때 반드시 루트 요소 생성
- 파일 분할
  - 컴포넌트를 만들 때 하나의 파일에 모든 코드를 작성하지 않고, 여러 개의 파일로 분할하여 작성
  - 컴포넌트를 관리, 유지하기 쉬움
  - 동료와 협업할 때 효율적

## 5. props
- 정의
  - 함수에게 매개변수를 사용하는 것처럼 컴포넌트에게 속성을 전달하는 것
  - 사용자가 속성을 이용하여 컴포넌트에게 데이터를 전달
  - 속성에 값을 넣을 때도 중괄호{}를 사용하여 동적 할당 가능
  ```javascript
  function App() {
    // 물품의 이름, 가격을 props로 전달
    const item = [
      {id: 1, name: '사과', price: 2000},
      {id: 2, name: '배', price: 3000},
      ...
    ]
    return (
      <div>
      <Item name={item[0].name} price={item[0].price} />
      </div>
    )
  }
  ```
- props 사용
  - 컴포넌트의 매개변수로 props를 사용
  - props는 객체로 전달
  ```javascript
  function Item(props) {
    // props의 키는 컴포넌트에 주는 속성의 이름과 같아야 함
    return (
      <div>
        <h3>상품명: {props.name}</h3>
        <h4>가격: {props.price}</h4>
      </div>
    )
  }
  ```

- 특징
  - props를 통해 컴포넌트를 다양하게 사용 가능
  - App.js와 컴포넌트 파일간의 데이터 공유
  - 재사용 가능한 컴포는넌트를 만들 수 있음

## 6. 합성
- 정의
  - 컴포넌트 안에 다른 컴포넌트를 포함시키는 것
  - 사용자 정의 컴포넌트로 컨텐츠를 감싼는 래퍼 태그로 쓰일 수 있음
  ```javascript
  // Card.js
  // 공통된 스타일을 가지는 컴포넌트를 사용
  function Card(props) {
    // class를 지정하기 위해 props.className을 사용
    // 클래스를 구분하기 위해 공백을 사용하여 클래스를 연결
    const classes = 'card ' + props.className;
    //props.children은 컴포넌트 태그 안에 있는 내용을 사용한다는 의미
    return <div className={classes}>{props.children}</div>
  }
  // ExpenseItem.js
  function ExpenseItem() {
    return (
      // 사용자 정의 컴포넌트에 class 지정 불가
      <Card className="expense-item">
        <div>...</div>
      </Card>
    )
  }
  ```

- 특징
  - 컴포넌트를 재사용할 수 있음
  - 컴포넌트를 더 작은 컴포넌트로 나눌 수 있음
  - 래퍼 컴포넌트를 사용하여 컴포넌트에 공통적인 부분을 추출할 수 있음

## 7. 실제 React JSX 코드
- 구버전에는 모든 컴포넌트 파일에 `React`를 import 해야 함
- JSX코드는 실제 React.createElement()를 사용하여 변환됨
  ```javascript
  // 구버전에는 React를 import 해야 함
  import React from 'react';
  ...
  return React.createElement('div', {}, React.createElement('h2', {}, 'Let\'s get started!'));
  // <h2>
  //   Let's get started!
  // </h2>
  ```
  - {}: 안에는 태그의 속성을 넣을 수 있음
  - 최신 버전에는 import를 생략해도 됨
- 루트 JSX 코드 설정 이유
  - 반환할 떄 하나만 반환 가능
  - 여러 개의 요소를 반환하려면 루트 요소를 만들어야 함