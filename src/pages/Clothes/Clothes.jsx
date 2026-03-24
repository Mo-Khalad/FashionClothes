import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Clothes.module.css";
import { CartContext } from "../../Store/CartContext.js";
import Button from "../../Component/Ui/Button.jsx";
import { useHttp } from "../../Hook/usehttp.js";
import { currencyFormatter } from "../../Logic/logic.js";
import { Loading } from "../../Component/Loading/Loading.jsx";
import { NotFound } from "../../Component/Error/NotFound.jsx";

const Clothes = () => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  const { data, isLoading, error } = useHttp(
    "https://dummyjson.com/products/category/mens-shirts",
    "Get",
    [],
  );
  const handleClickDetails = (product) => {
    navigate(`/clothes/product/${product.id}`);
  };

  let content = "";

  if (isLoading) {
    content = <Loading />;
  } else if (error || error !== undefined) {
    content = <NotFound errorMessage="Products Not Found" message="products" />;
  } else {
    content = (
      <div className={`d-flex flex-wrap justify-content-center`}>
        {data?.products?.length !== 0 &&
          data?.products?.map((product) => (
            <div
              className={`${Style.products} rounded-1 ps-2`}
              key={product.id}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                height={300}
                className={`${Style.imageProduct} w-100 p-4`}
              />
              <h2 className="fs-6">{product.category}</h2>
              <h4>{currencyFormatter.format(product.price)}</h4>
              <p className="paragraph">{product.title}</p>
              <Button
                className={`${Style.btnBuy} text-white`}
                onClick={() => addProduct(product)}
              >
                buy
              </Button>
              <Button
                className={Style.btnDetails}
                onClick={() => handleClickDetails(product)}
              >
                details
              </Button>
            </div>
          ))}
      </div>
    );
  }
  return content;
};
export default Clothes;
