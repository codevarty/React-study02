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
import { createBrowserRouter } from "react-router-dom";
const Router = createBrowserRouter([
  { path: "/", element: Home }, //path: 경로, element: 컴포넌트
]);
```

- 새로운 경로를 추가하려면 배열에 객체를 추가한다.

```javascript
const Router = createBrowserRouter([
  { path: "/", element: Home },
  // /about 경로 추가 => About 컴포넌트 랜더링
  { path: "/about", element: About },
]);
```

### 1.3 Link 컴포넌트로 경로 이동하기

- HTML의 anchor 태그는 페이지를 새로고침하면서 이동한다. (서버에 페이지를 요청 (잘못된 방법))
- Link 컴포넌트는 페이지를 새로고침하지 않고 이동한다. (프론트에서만 처리)

```javascript
import { Link } from "react-router-dom";
// '/about' 경로로 이동
<Link to="/about">About</Link>;
```

- NavLink 컴포넌트는 현재 경로와 일치하는 경우 스타일을 지정할 수 있다.
- 클래스이름을 지정할 때 함수를 사용할 수 있다.

```javascript
import { NavLink } from "react-router-dom";
// 현재 경로와 일치하는 경우 active 클래스를 지정한다.
<NavLink to="/about" className={({ isActive }) => (isActive ? "a" : "b")}>
  About
</NavLink>;
```

### 1.4 오류 페이지 만들기

- createBrowserRouter의 `errorElement` 속성을 사용하여 오류 페이지를 설정한다.

```javascript
const Router = createBrowserRouter({
  // 경로가 없는 경우 NotFound 컴포넌트 랜더링
  errorElement: <NotFound />,
  routes: [
    { path: "/", element: Home },
    { path: "/about", element: About },
  ],
});
```

### 1.5 프로그램 방식 경로 이동

- useNavigate 훅을 사용하여 프로그램 방식으로 경로를 이동한다.

```javascript
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
// handleClick 함수를 호출하면 '/about' 경로로 이동한다.
function handleClick() {
  navigate("/about");
}
```

### 1.6 동적 경로 설정하기

- 경로에 변수를 사용하려면 `:` 문자를 사용하여 변수를 설정한다.

```javascript
const Router = createBrowserRouter({
  routes: [
    { path: "/", element: <Home /> },
    // /about 경로에 변수를 사용한다.
    // 보통 id를 사용한다.
    { path: "/about/:id", element: <About /> },
  ],
});
```

- 동적 경로에서 변수를 사용하려면 useParams 훅을 사용한다.

```javascript
import { useParams } from "react-router-dom";
function About() {
  // useParams 훅을 사용하여 id 변수를 조회한다.
  const params = useParams();
  const { id } = params;
  return <div>About {id}</div>;
}
```

- 절대 경로 상대 경로
  - 절대 경로는 항상 `/` 문자로 시작한다.
  - 상대 경로는 `/` 문자로 시작하지 않는다.

```javascript
const Router = createBrowserRouter({
  routes: [
    { path: "/", element: <Home /> },
    // 절대 경로
    { path: "/about", element: <About /> },
    // 상대 경로
    { path: "about", element: <About /> },
  ],
});
```

- relative 속성을 사용하여 상대 경로를 설정할 수 있다.
  - `relative="path"` 형태는 `path` 경로를 기준으로 상대 경로를 설정한다.

```javascript
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <Link to=".." relative="path">
        About
      </Link>
    </div>
  );
}
```

## 2. Data fetching & Submission

### 2.1 데이터 가져오기

- loader 함수를 사용하여 데이터를 가져온다.
- createBrowserRouter의 `loader` 속성을 사용하여 데이터를 가져온다.

```javascript
const Router = createBrowserRouter({
  loader: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data; // 데이터를 반환한다.
  },
  routes: [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
  ],
});
```

- loader 함수는 프론트에서만 실행된다.
- loader 함수는 라우터 컴포넌트가 랜더링되기 전에 실행된다.
- loader 함수의 반환값을 사용하기 위해서 해당 컴포넌트에서 useLoaderData 훅을 사용한다.
- useLoaderData 훅은 해당 컴포넌트 보다 상위 컴포넌트에서 사용할 수 없고 같거나 낮은 컴포넌트에서 사용이 가능하다.

```javascript
import { useLoaderData } from "react-router-dom";
function Home() {
  // useLoaderData 훅을 사용하여 데이터를 조회한다.
  const data = useLoaderData();
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

### 2.2 오류 처리하기

- loader 함수에서 오류가 발생하면 오류 페이지를 랜더링한다.
- json 함수를 사용하여 JSON 데이터를 반환한다.
- json 형태로 오류 메세지 및 코드를 반환한다.

```javascript
// fetch 오류 발생
throw json({ message: "Could not fetch events." }, { status: 500 });
```

```javascript
// json 데이터를 받는 코드
const data = useLoaderData();
if (data.status === 500) {
  return <div>{data.message}</div>;
}
```

### 2.3 상위 라우트 LoaderData 사용하기

- useRouteLoaderData 훅을 사용하여 상위 라우트의 LoaderData를 조회한다.
- 상위 라우트에 id 값을 줘서 라우트에 id값을 설정한다.

```javascript
// 상위 라우트의 loader를 사용한다.
const data = useRouteLoaderData("route-id");
```

### 2.4 데이터 제출하기

- action 함수를 사용하여 데이터를 제출한다.
- loader 함수와 마찬가지로 페이지가 랜더링 될 때 실행된다.
- action 함수는 프론트에서만 실행된다.

```javascript
// formData 함수를 사용하여 데이터를 조회한다.
const data = await request.formData();

const eventData = {
  value1: data.get('value1'),
  value2: data.get('value2'),
  // ...
  };

const response = await fetch("http://localhost:8080/events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(eventData),
});
if (!response.ok) {
  // error code.
}

// 성공적으로 데이터를 제출하면 /events로 이동한다.
return redirect("/events");
```
```
