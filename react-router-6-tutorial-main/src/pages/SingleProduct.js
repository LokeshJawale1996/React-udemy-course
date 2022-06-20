import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <section className="section product">
      <h2>{productId}</h2>
      <Link to="/products">Back to products</Link>
    </section>
  );
};

export default SingleProduct;
