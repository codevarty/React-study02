# 리액트 라우터가 있는 SPA 다중 페이지 앱 만들기
## 1. Learn React Router
### 1.1 React Router
- 기존 웹 서버는 다양한 페이지를 각기 다른 URL로 제공한다. (URL이 변경되면 해당 페이지를 로드한다.)
- 리액트 라우터를 통해 처음에 HTML 컴포넌트를 랜더링하고 그 다음 부터는 URL에 따라 컴포넌트를 랜더링한다. (백앤드 전송 없이 프론트에서만 처리)
- 리액트 라우터 설치하기
```powershell
$ npm install react-router-dom
```
- 리액트 라우터 사용 단계 3가지
  - 1. 라우터 컴포넌트를 사용하여 라우터를 설정한다.
  - 2. 라우터 컴포넌트 안에 라우트 컴포넌트를 사용하여 경로와 컴포넌트를 연결한다.
  - 3. 라우터 컴포넌트 안에 링크 컴포넌트를 사용하여 경로와 링크를 연결한다.

### 1.2 React Router 사용하기
- createBrowserRouter 컴포넌트를 사용하여 라우터를 설정한다.
```javascript
import {createBrowserRouter} from 'react-router-dom';
const Router = createBrowserRouter([
  {path: '/', element: Home}, //path: 경로, element: 컴포넌트
]);
```
- 새로운 경로를 추가하려면 배열에 객체를 추가한다.
```javascript
const Router = createBrowserRouter([
  {path: '/', element: Home},
  {path: '/about', element: About}, // /about 경로 추가 => About 컴포넌트 랜더링
]);
```

## 2. Data fetching  & Submission