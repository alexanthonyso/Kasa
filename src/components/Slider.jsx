import React from "react";
import { useState } from "react";
import leftArrow from "../assets/logo/leftArrow.svg";
import rightArrow from "../assets/logo/rightArrow.svg";
import "../styles/components/_slider.css";

const Slider = ({ pictures }) => {
  const [current, setCurrent] = useState(0);

  const [number, setNumber] = useState(1);

  const tab = pictures && pictures.length;

  const next = () => {
    setCurrent(current === tab - 1 ? 0 : current + 1);
    setNumber(number === tab ? 1 : number + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? tab - 1 : current - 1);
    setNumber(number === 1 ? tab : number - 1);
  };

  // console.log(current);
  return (
    <div className="slider">
      {tab > 1 && (
        <img className="left" src={leftArrow} onClick={prev} alt="" />
      )}
      {tab > 1 && (
        <img className="right" src={rightArrow} onClick={next} alt="" />
      )}

      {tab > 1 && (
        <p className="number">
          {number} / {tab}
        </p>
      )}

      {pictures &&
        pictures.map((picture, index) => (
          <img
            className={
              (index === current ? "slideActive" : "slide") + " slideimg"
            }
            src={picture}
            key={index}
            alt=""
          />
        ))}
    </div>
  );
};

export default Slider;
