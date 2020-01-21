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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      centerPadding: "90px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slick">
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
