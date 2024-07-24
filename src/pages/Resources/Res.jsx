import React from "react";
import "./Res.css";
import logo1 from '../../images/fac-staff.png';
import logo2 from '../../images/students.png';
import logo3 from '../../images/partners.png';



import { Link } from "react-router-dom";

function Res() {
  return (
    <div className="rhome">
      <section className="rhed">
        <div className="res">
          <h1>Resources</h1>
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

      <section className="Res_Cards">
        <div className="Res_types">

          <div className="Res_type1">
            <img src={logo1} alt="Faculty and Staff" />
            <p>Faculty and Staff</p>
            <p className="Res_para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="Res_type1">
            <img src={logo2} alt="Students" />
            <p>Students</p>
            <p className="Res_para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="Res_type1">
            <img src={logo3} alt="Partners" />
            <p>Partners</p>
            <p className="Res_para">
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

export default Res;
