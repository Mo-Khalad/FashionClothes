import React from "react";
import style from "./Contact.module.css";
export const Contact = () => {
  return (
    <>
    
      <div className="mt-5">  
      <div className="mt-2 h-75">
        <div className="ratio ratio-16x9">
          <iframe
            title="Our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.894238842236!2d-73.9036495236907!3d40.73765783639421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f09cf3b9b0f%3A0x6a3a1f6dff0e4f0!2s60-49%20Flushing%20Ave%2C%20Queens%2C%20NY%2011378%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
         <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 p-5">
              <h2 className="fs-4"> Contacts Us </h2>
              <p className={`p-2 ${style.paragraph}`}>
                Contrary to popular belief, Lorem Ipsum is simply random text.
                It has roots in a piece of classical Latin literature from 45
                BC, maki years old.
              </p>

              <div className={`${style.data} mt-3 d-flex`}>
                <div>
                  <i
                    className={`${style.icon} fa-solid fa-location-dot py-3 px-2`}
                  ></i>
                </div>

                <div className="ms-2">
                  <span className={style.span}>Address:</span>
                  <h5>60-49 Road 11378 New York</h5>
                </div>
              </div>

              <div className={`${style.data} mt-3 d-flex`}>
                <div>
                  <i
                    className={`${style.icon} fa-solid fa-mobile py-3 px-2`}
                  ></i>
                </div>

                <div className="ms-2">
                  <span className={style.span}>Phone:</span>
                  <h5>+65 11.188.888</h5>
                </div>
              </div>

              <div className={`${style.data} mt-3 d-flex`}>
                <div>
                  <i
                    className={`${style.icon} fa-regular fa-message py-3 px-2`}
                  ></i>
                </div>

                <div className="ms-2">
                  <span className={style.span}>Email:</span>
                  <h5>hellocolorlib@gmail.com</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-5">
              <h2 className="fs-4"> Leave A Comment </h2>
              <p className={`${style.paragraph}`}>
                Our staff will call back later and answer your questions.
              </p>
              <form className="d-flex flex-wrap justify-content-between">
                <input
                  className={`${style.input}`}
                  type="text"
                  name="Your name"
                  placeholder="Your name"
                />
                <input
                  className={`${style.input}`}
                  type="text"
                  name="Your email"
                  placeholder="Your name"
                />
                <textarea
                  className={`${style.input_message} w-100 `}
                  type="text"
                  name="Your message"
                  placeholder="Your Message"
                />
              </form>

              <button className={`${style.send_Message_btn}`}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
