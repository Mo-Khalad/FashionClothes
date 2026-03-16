import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./Clothes.module.css";
import { CartContext } from "../../Store/CartContext.js";
import Button from "../../Component/Ui/Button.jsx";
import { useHttp } from "../../Hook/usehttp.js";
import Error from "../../Component/Error/Error.jsx";
import { currencyFormatter } from "../../Logic/logic.js";

const Clothes = () => {
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);

  const { data, isLoading, error } = useHttp(
    "https://fakestoreapi.com/products",
    "Get",
    []
  );
  const handleClickDetails = (product) => {
    navigate(`/clothes/product/${product.id}`);
  };

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-main text-white">
          Loading...
        </div>
      ) : (
        <>
          {error === undefined ? (
            <div className={`d-flex flex-wrap justify-content-center`}>
              {data.length !== 0 &&
                data.map((product) => (
                  <div
                    className={`${Style.products} rounded-1 ps-2`}
                    key={product.id}
                  >
                    <img
                      src={product.image}
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
          ) : (
            <Error error={error} />
          )}
        </>
      )}
    </>
  );
};
export default Clothes;
