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
  // /about 경로 추가 => About 컴포넌트 랜더링
  {path: '/about', element: About}, 
]);
```
### 1.3 Link 컴포넌트로 경로 이동하기
- HTML의 anchor 태그는 페이지를 새로고침하면서 이동한다. (서버에 페이지를 요청 (잘못된 방법))
- Link 컴포넌트는 페이지를 새로고침하지 않고 이동한다. (프론트에서만 처리)
```javascript
import {Link} from 'react-router-dom';
// '/about' 경로로 이동
<Link to="/about">About</Link>
```
### 1.4 오류 페이지 만들기
- createBrowserRouter의 `errorElement` 속성을 사용하여 오류 페이지를 설정한다.
```javascript
const Router = createBrowserRouter({
  // 경로가 없는 경우 NotFound 컴포넌트 랜더링
  errorElement: <NotFound />,
  routes: [
    {path: '/', element: Home},
    {path: '/about', element: About},
  ],
});
```

## 2. Data fetching  & Submission