import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import style from "./Home.module.css";
export const Countdown = () => {
  const targetDate = new Date("2026-06-01T00:00:00").getTime();  

    const getTimeRemaining=useCallback(()=> {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
  
      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      };
    },[targetDate])
 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimeRemaining]);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining()); 

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className={`${style.cover_count_down} col-12`}>
            <div className={`col-12 col-md-6 p-5 text-center mt-3`}>
              <h2 className="fs-1">Deal Of The Week</h2>
              <div className={`${style.line} my-3 m-auto`}></div>
              <p className={`${style.paragraph}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ipsum dolor sit amet, consectetur adipisicing elit
              </p>
              <h3 className={`${style.price} my-5`}>
                <span>$35.00 </span> / HanBag
              </h3>

              <div className="d-flex justify-content-around w-100">
                <div className={`${style.days} text-center`}>
                  <span>
                    {" "}
                    {timeLeft.days > 9 ? timeLeft.days : `0${timeLeft.days}`}
                  </span>

                  <p>day</p>
                </div>

                <div className={`${style.hours} text-center`}>
                  <span>
                    {" "}
                    {timeLeft.hours > 9 ? timeLeft.hours : `0${timeLeft.hours}`}
                  </span>
                  <p>HRS</p>
                </div>

                <div className={`${style.minutes} text-center`}>
                  <span>
                    {" "}
                    {timeLeft.minutes > 9
                      ? timeLeft.minutes
                      : `0${timeLeft.minutes}`}
                  </span>

                  <p>MINS</p>
                </div>

                <div className={`${style.seconds} text-center`}>
                  <span>
                    {timeLeft.seconds > 9
                      ? timeLeft.seconds
                      : `0${timeLeft.seconds}`}
                  </span>

                  <p>SECS</p>
                </div>
              </div>

              <button className={`${style.Show_Now_Btn} px-4 py-2 my-5`}>
                show now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
