import React from "react";
import style from "./Home.module.css";
import Slider from "./Slider";
import { Countdown } from "./Countdown";
import { FeaturedProducts } from "./FeaturedProducts";
import { Blog } from "./Blog";
import { Orders } from "./Orders";
import { Brands } from "./Brands";
export const Home = () => {
  return (
    <>
      <Slider />
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div
                className={`${style.men} d-flex justify-content-center align-items-center`}
              >
                <h4 className="text-center">Men’s</h4>
                <span></span>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div
                className={`${style.women} d-flex justify-content-center align-items-center`}
              >
                <h4 className="text-center">women</h4>
                <span></span>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div
                className={`${style.kids} d-flex justify-content-center align-items-center`}
              >
                <h4 className="text-center">kids</h4>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Countdown />
      <FeaturedProducts />
      <Blog />
      <Orders />
      <Brands />
    </>
  );
};
