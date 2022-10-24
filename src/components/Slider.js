import React, { useState, useEffect } from "react";
import { sliderItems } from "../data.js";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let increaseTimeout = setTimeout(() => {
      setIndex((prev) => {
        if (prev === sliderItems.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => {
      clearTimeout(increaseTimeout);
    };
  });

  const handleIncrease = () => {
    setIndex((prev) => {
      if (prev === sliderItems.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDecrease = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return sliderItems.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <div className="slider_sec_mini">
        <div className="sliders_mini">
          {sliderItems.map((item, itemIndex) => {
            const { img, title, desc, bg } = item;

            let position = "next";
            if (itemIndex === index) {
              position = "current";
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === sliderItems.length - 1)
            ) {
              position = "prev";
            }

            return (
              <article
                key={itemIndex}
                style={{ background: `#${bg}` }}
                className={position}
              >
                <div className="overlay">
                  <h1 className="promo_title_mini">{title}</h1>
                  <p className="promo_desc_mini">{desc}</p>
                  {/* <button className="promo_btn_mini">show now</button> */}
                </div>
                <img src={img} alt="slider" className="slider_image_mini" />
              </article>
            );
          })}
        </div>
      </div>
      <div className="hero">
        <div className="hero_img"></div>
        <div className="hero_overlay">
          <h1 className="hero_title">Welcome To laFashion</h1>
          <button className="hero_btn">about us</button>
        </div>
      </div>

      {/****************************   Screen and min-width:1440px  ***************************/}
      <div className="slider_sec">
        <div className="sliders">
          {sliderItems.map((item, itemIndex) => {
            const { img, title, desc, bg } = item;

            let position = "next";
            if (itemIndex === index) {
              position = "current";
            }
            if (
              itemIndex === index - 1 ||
              (index === 0 && itemIndex === sliderItems.length - 1)
            ) {
              position = "prev";
            }

            return (
              <article
                style={{ background: `#${bg}` }}
                key={itemIndex}
                className={position}
              >
                <img src={img} alt="slider" className="slider_image" />
                <div className="promo_info">
                  <h1 className="promo_title">{title}</h1>
                  <p className="promo_desc">{desc}</p>
                  <Link to="/winter">
                    <button className="promo_btn">show now</button>
                  </Link>
                </div>
              </article>
            );
          })}

          <div className="container_dots">
            {/* {Array.from({ length: 4 }).map((item, buttonIndex) => { */}

            {sliderItems.map((item, buttonIndex) => {
              return (
                <div key={buttonIndex}>
                  <button
                    className={index === buttonIndex ? "active dot" : "dot"}
                    onClick={() => setIndex(index + 1)}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="arrow">
          <FaArrowLeft onClick={handleDecrease} className="arrow_btn" />
          <FaArrowRight onClick={handleIncrease} className="arrow_btn" />
        </div>
      </div>
    </>
  );
}

export default Slider;
