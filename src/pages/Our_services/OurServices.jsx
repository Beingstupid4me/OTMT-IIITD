
import React from "react";
import "./ouServices.css";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <div className="our-services">
      <section className="intro_section">
        <div className="intro">
          <h1>Our services</h1>
          <br />
          <div className="rect"> hello</div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
      
      </section>



      <section className="services-list_section">
          <div className="services-listo">

              <div className="service-item1o">
                <Link to="/facinn">
                  <h2>Facilitate Innovation</h2>
                </Link>
              </div>

              <div className="service-item1o">
                <Link to="/tam">
                  <h2>Technology Maturity Assessment</h2>
                </Link>
              </div>

              <div className="service-item1o">
                  <h2>IPR Management</h2>
              </div>

              <div className="service-item1o">
                  <h2>Technology Licensing</h2>
              </div>

              <div className="service-item1o">
                <h2>Startup Facilitation</h2>
              </div>

            <div className="background_block"> hello  </div>
          </div>
            
      </section> 
    </div>


     

  );
}

export default OurServices;
