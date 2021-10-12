import React from 'react';
import './sass/css/slider.css';
export default function BtnSlider({ direction, moveSlide }) {
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next": "btn-slide prev"}>
        <i className={direction === "next" ? "fa fa-angle-right":"fa fa-angle-left"}></i>
      </button>
    );
  }

