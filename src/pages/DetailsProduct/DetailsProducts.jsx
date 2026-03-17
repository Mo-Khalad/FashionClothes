import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Component/Ui/Button.jsx";
import { CartContext } from "../../Store/CartContext.js";
import { currencyFormatter } from "../../Logic/logic.js";
import { useHttp } from "../../Hook/usehttp.js";
import { NotFound } from "../../Component/Error/NotFound.jsx";
import { Loading } from "../../Component/Loading/Loading.jsx";

const DetailsProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useContext(CartContext);
  let contents = ''
  const { data: product, isLoading, error } = useHttp(
    `https://dummyjson.com/products/${id || ""}`,
    "Get",
    null
  );

const productPrice = currencyFormatter.format(product?.price)

if (isLoading) {
  return (
    <Loading/>
  );
}
else if (!id || error || !product) {
  contents = <NotFound errorMessage='Product Not Found' message='product'/>
}
 
else {
   contents = <div className='details_product'>
    
<div className="container">
  <div className="row">
 
   <div className="col-12 d-flex flex-wrap justify-content-around align-items-center">
    <div className="mt-3 col-12 col-md-6">
      <img
        src={product?.images[0]}
        alt={product?.title}
        className="rounded w-100"
      />
      </div>

      <div className="mt-5 col-12 col-md-6" style={{ maxwidth: "60%" }}>
          <h2 className="main-color">{product?.category}</h2>
          <h5 className="fs-6 main-color">{product?.title}</h5>
          <p className="mt-3">{product?.description}</p>
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
</div>
<Button className="bg-main text-white mb-3 m-5" onClick={() => navigate("/clothes")}>
      ← Back to Clothes
     </Button>
</div> 

}

return (
  contents
)
}
export default DetailsProducts;
