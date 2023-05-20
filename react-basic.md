# 리액트 기초 및 실습 컴포넌트
- 리액트는 사용자 인터페이스를 쉽게 만들어 주는 라이브러리이다.
- 리액트는 컴포넌트로 이루어져 있다.
## 1. 컴포넌트
- 정의
  - 모든 사용자 인터페이스가 컴포넌트로 이루어져 있다.
  - 컴포넌트는 html, css, js 의 결합이다. 그 중 html 과 자바스크립트의 결합이 가장 중요하다.
  - 모든 종류의 웹 애플리케이션은 컴포넌트로 나눌 수 있다.
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
