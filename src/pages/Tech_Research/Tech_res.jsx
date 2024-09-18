

import React from "react";
import "./Tech_res.css";
import { Link } from "react-router-dom";

function Resrch() {
  return (
    <div className="research">
      <section className="des">
        <h1>Our Research</h1>
        <div className="underline1"> hello</div>
        <br />
        <p>
          At the Office of Technology Management and Transfer (OTMT), our
          research endeavors are the cornerstone of our mission to drive
          technological advancement and innovation. Our research programs are
          meticulously designed to explore new frontiers, solve complex
          problems, and contribute to the development of cutting-edge
          technologies that have the potential to transform industries and
          improve lives.
        </p>
        <h2>Ongoing R and D</h2>
        <div className="underline2"> hello</div>
        <p>
          At the Office of Technology Management and Transfer (OTMT), our
          ongoing research and development (R&D) initiatives are the driving
          force behind our commitment to innovation and technological
          advancement. These initiatives encompass a wide range of projects
          aimed at addressing contemporary challenges, pioneering new
          technologies, and creating sustainable solutions for the future.
        </p>
      </section>

      <div className="btn1">
        <a
          href="https://iiitd.ac.in/research/projects/srp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service_btn">List of ongoing works</button>
        </a>
        <a
          href=" https://docs.google.com/document/d/1MelfFkfhfX6wfB2q-qrGkY5hQipOmPkO/edit?usp=sharing&ouid=113746858237678511080&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service_btn">File your IPR with us</button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdDMThVAiQwRLV6wkoM3YFGQXmu6IJ7gpH5jShh1xJeY8ZTFw/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="service_btn">Commercialize your Technology</button>
        </a>

        <button className="service_btn">Looking for Technology</button>
      </div>

      <h2 className="ipr-heading">Our IPRs</h2>
      <div className="underline3"> hello</div>
      <div className="btn2">
        <Link to="/Ipr_Table">
          <button className="service_btn">List of IPRs</button>
        </Link>
      </div>

      <div id="back_block_research"> </div>
    </div>
  );
}

export default Resrch;
