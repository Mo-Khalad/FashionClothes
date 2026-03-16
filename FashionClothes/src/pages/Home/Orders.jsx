import React from "react";
import style from "./Home.module.css";
import order1 from "../../images/order1.webp";
import order2 from "../../images/order2.webp";

export const Orders = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className={`${style.order} col-12 d-flex justify-content-around flex-wrap px-2 py-3 mb-5`}
          >
            <div
              className={`${style.free_Shipping} col-12 col-lg-4 d-flex justify-content-center px-2 py-3 flex-wrap`}
            >
              <div className="me-4">
                <img src={order1} alt="order" width={50} />
              </div>
              <div>
                <h6>Free Shipping</h6>
                <p>For all order over 99$</p>
              </div>
            </div>

            <div
              className={`${style.free_Shipping} col-12 col-lg-4 d-flex justify-content-center p-2 flex-wrap`}
            >
              <div className="me-4">
                <img src={order2} alt="order" width={50} />
              </div>
              <div>
                <h6>Secure Payment</h6>
                <p>100% secure payment</p>
              </div>
            </div>

            <div
              className={`${style.free_Shipping} col-12 col-lg-4 d-flex justify-content-center px-2 py-3 flex-wrap `}
            >
              <div className="me-4">
                <img src={order1} alt="order" width={50} />
              </div>
              <div>
                <h6> Delivery On Time</h6>
                <p>If good have prolems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
