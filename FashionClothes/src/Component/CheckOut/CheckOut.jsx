import Modal from "../Ui/Modal.jsx";
import React, { useContext } from "react";
import Button from "../Ui/Button.jsx";
import Inputs from "../Ui/Inputs.jsx";
import { CartContext } from "../../Store/CartContext.js";
import Label from "../Ui/Label.jsx";
import Style from "./CheckOut.module.css";
import { totalPriceProducts } from "../../Logic/logic.js";
import { DisplayContext } from "../../Store/DisplayContext.js";
const CheckOut = () => {
  const DisplayCrx = useContext(DisplayContext);
  
  const { item } = useContext(CartContext);
  return (
    <> 
      <Modal className="check-out" open={DisplayCrx.modalShow === "checkOut"}>
        <h4 className="text-center sub-color my-2 fs-3">CheckOut</h4>
        <h3 className="fs-6 total-price position-absolute start-0 bottom-0">
          TotalPrice : $  { totalPriceProducts(item)}
        </h3>
        <form>
          <Label className={`${Style.label} sub-color my-2 fs-6`} htmlFor={"full-name"}>
            full-name
          </Label>
          <Inputs className={`${Style.inputCheckOut} w-50 rounded-1 p-1 bg-sub
           border border-0`} id="full-name" type="text" />

          <Label className={`${Style.label} sub-color my-2 fs-6`} htmlFor="email">
            email
          </Label>
          <Inputs className={`${Style.inputCheckOut} w-50 rounded-1 p-1 bg-sub
           border border-0`} id="email" type="email" />

          <Label className={`${Style.label} sub-color my-2 fs-6`} htmlFor="street">
            full name
          </Label>
          <Inputs className={`${Style.inputCheckOut} w-50 rounded-1 p-1 bg-sub
           border border-0`} id="street" type="text" />

          <div className="control-row d-flex">
            <div className="control me-3">
              <Label className={`${Style.label} sub-color my-2 fs-6`} htmlFor="postal">
                postal
              </Label>
              <Inputs
                className={`${Style.inputCheckOut} w-100 rounded-1 p-1 bg-sub
                 border border-0`}
                id="postal"
                type="text"
              />
            </div>
            <div className="control">
              <Label className={`${Style.label}  sub-color my-2 fs-6`} htmlFor="city">
                city
              </Label>

              <Inputs
                className={`${Style.inputCheckOut} w-100 rounded-1 p-1 bg-sub
                 border border-0`}
                id="city"
                type="text"
              />
            </div>
          </div>
          <p className="mt-4 d-flex justify-content-end">
            <Button
              className={`${Style.btnSubmitOrder} main-color rounded-1 px-4`}
              type="button"
              onClick={() => DisplayCrx.handleModalShow("")}
            >
              close
            </Button>
            <Button
              className={`${Style.btnSubmitOrder} main-color rounded-1 px-4`}
              type="button"
              onClick={() => DisplayCrx.handleModalShow("")}
            >
              Submit Order
            </Button>
          </p>
        </form>
      </Modal>
    </>
  );
};
export default CheckOut;
