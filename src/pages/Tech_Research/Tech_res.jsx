// import React from "react";
// import "./Tech_res.css";
// import { Link } from "react-router-dom";

// function Resrch() {
//   return (
//     <div className="research">
//       <section className="des">
//         <h1>Our Research</h1>

//         <div className="underline1"> hello</div>
//         <br />
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </p>
//         <h2>Ongoing R and D</h2>
//         <div className="underline2"> hello</div>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat.
//         </p>
//       </section>

//       <div className="btn">
//         <button className="service_btn">List of ongoing works</button>
//         <button className="service_btn">File your IPR with us</button>
//         <button className="service_btn">Commercialize your Technology</button>
//         <button className="service_btn">Looking for Technology</button>
//       </div>

//     </div>
//   );
// }

// export default Resrch;

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Ongoing R and D</h2>
        <div className="underline2"> hello</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
