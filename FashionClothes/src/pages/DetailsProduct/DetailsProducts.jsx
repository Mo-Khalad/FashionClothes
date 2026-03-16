import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Component/Ui/Button.jsx";
import { CartContext } from "../../Store/CartContext.js";
import { currencyFormatter } from "../../Logic/logic.js";
import { useHttp } from "../../Hook/usehttp.js";
import Error from "../../Component/Error/Error.jsx";

const DetailsProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);
  const { data: product, isLoading, error } = useHttp(
    `https://fakestoreapi.com/products/${id || ""}`,
    "Get",
    null
  );

  if (!id) {
    return (
      <div className="container py-5 text-center">
        <p>Product not found.</p>
        <Button className="bg-main text-white" onClick={() => navigate("/clothes")}>
          Back to Clothes
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50 py-5">
        Loading...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-5 text-center">
        <Error error={error || "Product not found"} />
        <Button className="bg-main text-white mt-3" onClick={() => navigate("/clothes")}>
          Back to Clothes
        </Button>
      </div>
    );
  }

  const productPrice = currencyFormatter.format(product.price);

  return (
    <div className="container pt-5 pb-5">
      <Button className="bg-main text-white mb-3" onClick={() => navigate("/clothes")}>
        ← Back to Clothes
      </Button>
      <div className="d-flex flex-wrap justify-content-around align-items-start">
        <div className="mt-3">
          <img
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="mt-5" style={{ maxWidth: "50%" }}>
          <h2 className="main-color">{product.category}</h2>
          <h5 className="fs-6 main-color">{product.title}</h5>
          <p className="mt-3">{product.description}</p>
          <h4 className="mt-3">{productPrice}</h4>
          <Button
            className="bg-main text-white fs-5 mt-2"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default DetailsProducts;
