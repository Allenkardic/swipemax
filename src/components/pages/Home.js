/** @format */

import React, { Component } from "react";
import "../../css/Home.css";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <div className="second-box">
          <div className="second-box-items"></div>
          <div className="second-box-items"></div>
          <div className="second-box-items"></div>
          <div className="second-box-items"></div>
          <div className="second-box-items"></div>
          <div className="second-box-items"></div>
        </div>

        <div className="third-box-des">
          <div className="third-box-des-items">
            <h1>This is a simple Project test</h1>
            <h2>This is a simple project test</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora esse recusandae! Adipisci cumque molestiae eos
              voluptatibus quo aliquid rem voluptates ipsa cum, ipsam
              reprehenderit nobis earum deleniti nemo commodi repellat
              asperiores at fugit et animi quae ipsum laborum explicabo.
            </div>
          </div>
          <div className="third-box-des-items">
            <div className="third-box-des-items-cont">
              <div className="third-box-des-items-contents">2</div>
              <div className="third-box-des-items-contents">Add</div>
              <div className="third-box-des-items-contents">Minus</div>
            </div>
          </div>
        </div>

        <div className="third-box-mob">
          <div className="third-box-mob-items">2</div>
          <div className="third-box-mob-items">Add</div>
          <div className="third-box-mob-items">Minus</div>
        </div>

        <div className="forth-box">
          <div className="forth-box-items"></div>
          <div className="forth-box-items"></div>
          <div className="forth-box-items"></div>
        </div>
      </div>
    );
  }
}

export default Home;
