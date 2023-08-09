import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/Home";
import ProductsPage from "./routes/Products";

// path는 브라우저의 주소창에 표시되는 경로를 의미한다.
// createBrowserRouter 함수의 배개 변수는 객체 배열이다.
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  // RouterProvider 컴포넌트는 라우터를 제공하는 컴포넌트이다.
  return <RouterProvider router={router} />;
}

export default App;
