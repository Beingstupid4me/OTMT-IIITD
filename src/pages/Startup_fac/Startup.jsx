import React from "react";
import "./Startup.css";
import { Link } from "react-router-dom";
import FaqPopup5 from "../../components/faq5";
import logo1 from '../../images/iiiitd.png';
import logo2 from '../../images/logo5.png';
import logo3 from '../../images/logo5.png';

function Startup() {
  return (
    <div className="startup">
      <section className="des_start">
        <h1>Startup Facilitation</h1>

        <div className="underline1"> </div>
        <br />
        <h2>
          “We believe that entrepreneurship has the greatest potential to
          revolutionize”
        </h2>
        <div className="underline2"> </div>
        <p>
          At IIIT Delhi, we are committed to fostering a vibrant startup
          ecosystem that empowers innovators and entrepreneurs to turn their
          ideas into impactful ventures. Our comprehensive support system is
          designed to cater to both aspiring and seasoned business owners,
          providing them with the necessary tools, resources, and connections to
          thrive.<br /><br /> Our Ecosystem: Driving Innovation and Entrepreneurship <br /> <br />We
          understand that entrepreneurship requires more than just an idea. It
          takes mentorship, access to networks, and a supportive environment.
          That's why our innovation-driven ecosystem brings together the best of
          research, industry expertise, and entrepreneurial guidance to create a
          launchpad for startups. At the heart of this ecosystem are our leading
          innovation centers and hubs that provide a range of services and
          support.
        </p>
      </section>

      <div className="img_cont">
  <a href="https://examplelink1.com">
        <img src={logo1} alt="Logo 1" className="image-link1" />
  </a>
  
  <a href="https://examplelink2.com">
    <img src="https://via.placeholder.com/150" alt="Explore 2" className="image-link2" />
  </a>

  <a href="https://examplelink3.com">
    <img src="https://via.placeholder.com/150" alt="Explore 3" className="image-link3" />
  </a>
</div>



      <div id="back_block_startup"> </div>
      <FaqPopup5 />
    </div>
  );
}

export default Startup;
