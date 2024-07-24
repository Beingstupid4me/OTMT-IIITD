import React from "react";
import "./tech.css";
import logo1 from '../../images/tech_1.png';
import logo2 from '../../images/tech_2.png';


import { Link } from "react-router-dom";

function Tech() {
  return (
    <div className="thome">
      <section className="thed">
        <div className="technology">
          <h1>Technology</h1>
          <br />
          <div className="title_decoration"> hello</div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <section className="Cards">
        <div className="tech_types">
          <div className="tech_type1">
            <img src={logo1} alt="Our Research" />
            <p>Our Research</p>
            <p className="para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="tech_type1">
            <img src={logo2} alt="Our Technologies" />
            <p>Our Technologies</p>
            <p className="para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tech;
