import React from "react";
import style from "./Home.module.css";
import vCorp from "../../images/vCorp.webp";
import banToni from "../../images/banToni.webp";
import zukata from "../../images/zukata.webp";
import Alitume from "../../images/Alitume.webp";
import vicinck from "../../images/vicinck.webp";

export const Brands = () => {
  const images = [vCorp, banToni, zukata, Alitume, vicinck];
  return (
    <div className={`${style.Brands} p-5`}>
      <div className="container">
        <div className="row">
          <div className="text-center col-12 d-flex justify-content-around flex-wrap">
            {images.map((image, index) => {
              return (
                <div className="col-4 col-md-3 col-lg-2 my-2" key={index}>
                  <img src={image} alt="brand" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
