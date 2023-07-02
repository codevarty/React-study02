# HTTP 요청 보내기 (데이터베이스 연동하기)

## 1. 리엑트와 데이터베이스 연동하기
- 리액트 앱에서 데이터베이스와 direct로 연동 하면 안된다. -> 자바스크립트를 사용해서 데이터베이스에 저장된 정보를 가져 올 수 있기 때문이다.
- 데이터베이스와 안전하게 연동하려면 백엔드 서버를 만들어서 백엔드 서버를 통해서 데이터베이스와 연동해야 한다.
- 리액트 앱은 백엔드 서버와 url 주소를 통해서 통신을 한다.
- 리액트 앱 -> API 서버 -> 데이터베이스
- 해당 파일은 API 서버를 통해 더미 데이터를 사용한다.

### 1.1 더미 데이터 가져오기 (GET 요청)
- Fetch API를 사용해서 데이터를 가져오거나 보낼 수 있디.
- fetch()함수를 사용하여 API 서버에 GET 요청을 보낼 수 있다.
  ```javascript
  fetch('http://localhost:3001/todos') // GET 요청
  .then(res => res.json()) // 응답 데이터를 json 형태로 변환  / res.json()은 Promise 객체를 반환한다.
  .then(data => console.log(data)) // json 형태로 변환된 응답 데이터를 콘솔에 출력
  .catch(err => console.log(err)); // 에러가 발생하면 에러를 콘솔에 출력
  ```
  - fetch()함수는 첫번째 인자로 url을 받는다.
  - fetch()함수는 Promise 객체를 반환한다.
  - then() 함수는 fetch() 함수가 정상적으로 실행되어 응답 데이터를 받아오면 실행된다.
  - catch() 함수는 fetch() 함수가 실행되다가 에러가 발생하면 실행된다.

### 1.2 비동기 / 대기
- async / await
  - async / await는 Promise를 더욱 쉽게 사용할 수 있도록 해준다.
  - async / await는 then() 체인 대신 사용할 수 있다. 즉 코드가 간결해진다.
  - try - catch 문을 사용하여 에러를 처리할 수 있다.

- state로 연결 대기 상태 만들기
  - state를 통해 연결 대기 상태를 만들 수 있다.
  - 조건부 렌더링(&&)을 통해 연결 대기 상태를 보여줄 수 있다.
  - 또한 state를 통해 에러 메세지를 보여줄 수 있다.

## 2. HTTP 요청 보내기  & 응답 받기
- useEffect() 함수를 사용하여 컴포넌트가 렌더링 될 때 API 서버에 GET 요청을 보내고 응답 데이터를 받아온다.
  - 두번째 인자로 실행하는 함수의 포인터를 넣을 수 있음
  - 일반 함수 포인터를 넣으면 컴포넌트가 갠더링 될 때 마다 실행 되므로 useCallBack() 함수를 사용하여 재 랜더링 방지

### 2.1 데이터베이스에 데이터 추가하기 (POST 요청)
- firebase를 사용하여 데이터베이스에 데이터를 추가할 수 있다.
- firebase는 데이터베이스가 아니라 데이터베이스를 제공하는 서비스이다.

- fetch 함수의 POST를 사용하여 데이터를 추가한다.
  ```javascript
  fetch('https://react-http-6a9a0.firebaseio.com/todos.json', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
  })
  ```
  - 첫번째 인자로 url을 넣는다.
  - 두번째 인자로 옵션 객체를 넣는다.
    - method: HTTP 요청 메소드를 넣는다.
    - body: HTTP 요청 메소드가 POST일 때 데이터를 넣는다.
    - headers: HTTP 요청 헤더를 넣는다.
  - json 형태의 데이터를 보내기 위해서는 JSON.stringify() 함수를 사용한다.
