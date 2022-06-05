import React from "react";

const BannerSlide = ({ image, link }) => {
  return (
    <div
      className="single-item focus-reset text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="slider-content"></div>
      </a>
    </div>
  );
};

export default BannerSlide;
