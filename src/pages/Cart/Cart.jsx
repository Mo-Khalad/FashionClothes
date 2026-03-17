import React, { useContext } from "react";
import { CartContext } from "../../Store/CartContext.js";
import Modal from "../../Component/Ui/Modal.jsx";
import Button from "../../Component/Ui/Button.jsx";
import {
  currencyFormatter,
  totalPriceProduct,
  totalPriceProducts,
} from"../../Logic/logic.js"
import Style from "./cart.module.css";
import { DisplayContext } from "../../Store/DisplayContext.js";
const Cart = () => {
  const {item} = useContext(CartContext);
  const DisplayCrx = useContext(DisplayContext);
  const { addProduct , removeProducts } = useContext(CartContext);
  
  return (
    <Modal className="cart" open={DisplayCrx.modalShow === "cart"}>
      <h4 className="mb-5 mt-5 fs-4 text-center sub-color">Your Cart</h4>
      <ul className='cart_Ul'>
      {item.length === 0 ? (
            ""
          ) : (
            <li className="fs-4 sub-color fw-bolder total-price position-absolute mt-5">
              total Price : {totalPriceProducts(item)} $
            </li>
          )}
        {item.length === 0 ? (
          <h1 className='sub-color text-center fs-4'>no added products</h1>
         
        ) : (
            item.map((product) => (
            <div
              key={product.id}
              className="d-flex justify-content-between mt-2"
            >
              <ul className="d-flex mt-2 cart-items">
                <li className="sub-color paragraph w-75">{product.title}</li>
                <li className="sub-color">
                  {currencyFormatter.format(
                    totalPriceProduct(product.price , product.quantity)
                  )}
                </li>
              </ul>
              <ul className='cart-items-btns'>
                <li className="px-2 sub-color d-flex justify-content-around ">
                  <button
                    className={`${Style.iconButton} bg-sub rounded-circle
                     border border-0 mx-3`}
                    onClick={() => addProduct(product)}
                  >
                    <i
                      className={`${Style.icon} plus fa-sharp-duotone fa-solid fa-plus`}
                    ></i>
                  </button>
                  <span className="sub-color"> {product.quantity}</span>
                  <button
                    className={`${Style.iconButton} bg-sub rounded-circle 
                    border border-0 mx-3`}
                    onClick={() =>{
                       removeProducts(product.id)
                      item.length === 1 && localStorage.removeItem("items")
                    }
                }>
                    <i className={`${Style.icon} minus fa-solid fa-minus`}></i>
                  </button>
                </li>
              </ul>
            </div>
          ))
        )}
        <ul>
          <li>
            <Button
              className="main-color btnClose position-absolute top-0 start-0 ms-4"
              onClick={() => DisplayCrx.handleModalShow('') }
            >
              close
            </Button>
          </li>
         {item.length!==0 ?<>
          <li>
            <Button
              className="main-color btn-checkOut position-absolute top-0 end-0 me-4"
              onClick={() => DisplayCrx.handleModalShow("checkOut")}
            >
              check out
            </Button>
          </li>
          </>:''}
        </ul>
      </ul>
    </Modal>
  );
};
export default Cart;
