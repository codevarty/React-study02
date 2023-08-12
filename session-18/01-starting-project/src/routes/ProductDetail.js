import { useParams } from "react-router-dom";

function ProductDetailPage() {
  // useParams() hook을 사용하면, 현재 페이지의 URL에서 파라미터 값을 추출할 수 있다.
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
