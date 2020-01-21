/** @format */

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/slider.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%"

        // position: "absolute"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%"
      }}
      onClick={onClick}
    />
  );
}

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "90px",
      slidesToShow: 4,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
          <div className="slide-items">
            <div className="slide-items-contents"></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CenterMode;
