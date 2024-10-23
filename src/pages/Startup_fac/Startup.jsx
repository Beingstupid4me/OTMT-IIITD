import React from "react";
import "./Startup.css";
import { Link } from "react-router-dom";
import FaqPopup5 from "../../components/faq5";

function Startup() {
  return (
    <div className="startup">
      <section className="des">
        <h1>Startup Facilitation</h1>
        
        <div
          className="underline1"
      
        >
          {" "}
          
        </div>
        <br />
        <h2>
          “We believe that entrepreneurship has the greatest potential to
          revolutionize”
        </h2>
        <div
          className="underline2"
        >
          {" "}
          
        </div>
        <p>
          Embark on a journey of entrepreneurial success with our comprehensive
          support system designed to guide both aspiring and seasoned business
          owners. From providing essential tools and resources to fostering a
          vibrant community of collaboration, our Entrepreneurship Cell (ECELL)
          and Innovation Hub (IHUB) offer an unparalleled environment for
          innovation and growth. Whether you're seeking mentorship, workshops,
          or a space to bring your ideas to life, our programs are tailored to
          empower entrepreneurs at every stage of their journey. Join us as we
          cultivate a culture of creativity, resilience, and strategic thinking,
          where your entrepreneurial spirit can flourish and thrive
        </p>
      </section>

      <a
                // href="https://forms.gle/mok6pPJfzP34X1638">
                href="https://iiitdic.in/">
                      <div className="btn">
        <button className="service_btn">EXPLORE MORE</button>
      </div>
      </a>
  

      <div id="back_block_startup">   </div>
      <FaqPopup5 />
    </div>
  );
}

export default Startup;
