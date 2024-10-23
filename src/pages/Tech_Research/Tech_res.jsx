import React from "react";
import "./Tech_res.css";
import { Link } from "react-router-dom";
import logo3 from "../../images/technology_res.jpg";


function Resrch() {
  return (
    <div className="research">
      <section className="res_des">
        {/* Left Side - Text Content */}
        <div className="txt_content">
          <h1>Our Research</h1>
          <div className="res_line"></div>
          <br />
          <p>
            At the Office of Technology Management and Transfer (OTMT), we serve
            as the critical bridge between the cutting-edge research conducted
            at IIIT Delhi and the world of commercialization and industry
            collaboration. While the groundbreaking research happens at IIIT
            Delhi, our role is to ensure that these innovations are identified,
            nurtured, and successfully transferred to the marketplace where they
            can create real impact. We are committed to fostering collaboration
            between researchers, industry leaders, and entrepreneurs to help
            transform research outcomes into commercial products, services, and
            technologies that drive societal and economic progress.
          </p>
          <h2>Ongoing R&D</h2>
          <div className="res_line2"></div>
          <p>
            While the research happens at IIIT Delhi, OTMT’s role is to record,
            promote, and encourage collaboration to ensure that the research is
            translated into tangible products and solutions. Our ongoing
            initiatives include: <br /> A) Facilitating Cross-Sector
            Collaboration: We actively encourage collaborations between
            researchers at IIIT Delhi and industry leaders, startups, and
            policymakers, ensuring that research is aligned with market needs.{" "}
            <br /> B) Promoting Innovation Ecosystem: OTMT supports the
            development of an innovation ecosystem at IIIT Delhi, where
            researchers and entrepreneurs collaborate to address global
            challenges through cutting-edge technology. <br /> C) Commercialization
            Pathways: We guide researchers through the commercialization
            process, from securing patents to licensing technology to industry
            partners or launching spin-off companies.
          </p>
        </div>

        {/* Right Side - Image Content */}
        <div className="image-container">
          <img
            src={logo3}
            alt="Research"
          />
        </div>
      </section>

      {/* Buttons Section */}
      <div className="res_btn">
        <a
          href="https://iiitd.ac.in/research/projects/srp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">List of ongoing works</button>
        </a>
        <a
          href="https://forms.gle/A6DZy5P4h9jhGGB86"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">File your IPR with us</button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdDMThVAiQwRLV6wkoM3YFGQXmu6IJ7gpH5jShh1xJeY8ZTFw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ser_btn">Commercialize your Technology</button>
        </a>

        <button className="ser_btn">Looking For Research Collaboration</button>
      </div>

      {/* IPR Section */}
      <h2 className="ipr-heading">Our IPRs</h2>
      <div className="res_line3"> </div>
      <div className="res_btn2">
        <Link to="/Ipr_Table">
          <button className="service_btn">List of IPRs</button>
        </Link>
      </div>

      <div id="back_block_research"></div>
    </div>
  );
}

export default Resrch;
