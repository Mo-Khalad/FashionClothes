import React from "react";
import Blog1 from "../../images/blog-1.webp";
import Blog2 from "../../images/blog-2.webp";

import style from "./Home.module.css";

const blog_images = [Blog1, Blog2, Blog1];

export const Blog = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          {blog_images.map((image, index) => {
            return (
              <div
                className={`col-11 col-md-6 col-xl-4 m-auto ${style.blog}`}
                key={index}
              >
                <div className={style.Blog_img}>
                  <img className="w-100" src={image} alt="Blog" />
                </div>
                <div className="my-2">
                  <i
                    className={`fa-regular fa-calendar ${style.calendar} ms-2`}
                  ></i>
                  <span className={`${style.calendar_text} mx-2`}>
                    May 4,2019
                  </span>
                  <i
                    className={`fa-regular fa-comment ${style.calendar} ms-3`}
                  ></i>
                  <span className={`${style.calendar_text} ms-2`}>5</span>
                </div>

                <h4 className="ms-1">
                  The Best Street Style From London Fashion Week
                </h4>
                <p className="ms-1">
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
