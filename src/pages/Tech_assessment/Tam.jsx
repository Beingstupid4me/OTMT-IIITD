// import React from "react";
// import "./tam.css";
// import { Link } from "react-router-dom";

// function Tam() {
//   return (
//     <div className="tech">
//       <section className="des">
//         <h1>Technology Maturity Assessment</h1>
//         <br />
//         <div className="rect"> hello</div>
//         <br />
//         <p>
//           Our goal is to create a dynamic ecosystem where innovation thrives.
//           Whether you're a student, faculty member, or external entrepreneur, we
//           provide the tools, knowledge, and connections needed to turn your
//           ideas into impactful innovations. Join us in shaping the future
//           through innovation!
//         </p>
//       </section>
//       <section className="services-listt">
//             <h2>Benefits</h2>
//             <div className="title_decoration"
//                 style={{ height: "0.25rem", width: "35vh", "margin-right": "7vh" }}
//             >
          
//                 {" "}
//                 hello
//             </div>

//                 <div className="service-item1t">
//                 <h2>Streamline Focus</h2>
//                 <p>
//                 Helps you set clear goals and work towards them.
//                 </p>
//                 </div>
//                 <div className="service-item1t">
//                 <h2>Innovation Tracking</h2>
//                 <p>
//                 Lets you see how your new ideas are progressing, which helps with planning.
//                 </p>
//                 </div>
//                 <div className="service-item1t">
//                 <h2>Market Edge</h2>
//                 <p>
//                 Gives you tips to stay ahead of competitors.
//                 </p>
//                 </div>
//                 <div className="service-item1t">
//                 <h2>Entry Tactics</h2>
//                 <p>
//                 Advises you on the best ways to start selling your product.
//                 </p>
//                 </div>
//                 <div className="service-item1t">
//                 <h2>Smart Resourcing</h2>
//                 <p>
//                 Shows you how to use your money and materials wisely.
//                 </p>
//                 </div>
//                 <div className="service-item1t">
//                 <h2>Strategic Choices</h2>
//                 <p>
//                 Helps you decide which projects are worth focusing on.
//                 </p>
//                 </div>

//                 <div className="service-item1t">
//                 <h2>Ready to Scale</h2>
//                 <p>
//                 Points out which technologies are ready to be turned into products and sold to a lot of people.
//                 </p>
//                 </div>
        
//             </section>

//       <div className="service-buttons">
//         <button className="service-btn">Submit Your Details</button>
//         <button className="service-btn">Policy and SOPs</button>
//         <button className="service-btn">Contact to evaluate TRL</button>
//       </div>
//     </div>
//   );
// }

// export default Tam;



import React from "react";
import "./tam.css";
import { Link } from "react-router-dom";
import FaqPopup from "../../components/faq";

function Tam() {
  return (
    <div className="tech_ass">
      <section className="des_sec">
        <div className="des">
        <h1>Technology Maturity Assessment</h1>
        <br />
        <div
            className="title_decoration1"
            style={{ height: "0.6rem", width: "35vh", "margin-left": "9vh", "marginTop":"2vh" }}
          >
            {" "}
            hello
          </div>
        <br />
        <p>
          Our goal is to create a dynamic ecosystem where innovation thrives.
          Whether you're a student, faculty member, or external entrepreneur, we
          provide the tools, knowledge, and connections needed to turn your
          ideas into impactful innovations. Join us in shaping the future
          through innovation!
        </p>

        </div>
    
      </section>

      <div className="title_container">
          <h2>Benefits</h2>
          <div
            className="title_decoration"
            style={{ height: "0.3rem", width: "15vh", "margin-left": "9vh", "marginTop":"2vh" }}
          >
            hello
          </div>
        </div>
      <section className="services_listt">
      
        <div className="service_item1t">
          <h2>Streamline Focus</h2>
          <p>Helps you set clear goals and work towards them.</p>
        </div>
        <div className="service_item1t">
          <h2>Innovation Tracking</h2>
          <p>Lets you see how your new ideas are progressing, which helps with planning.</p>
        </div>
        <div className="service_item1t">
          <h2>Market Edge</h2>
          <p>Gives you tips to stay ahead of competitors.</p>
        </div>
        <div className="service_item1t">
          <h2>Entry Tactics</h2>
          <p>Advises you on the best ways to start selling your product.</p>
        </div>
        <div className="service_item1t">
          <h2>Smart Resourcing</h2>
          <p>Shows you how to use your money and materials wisely.</p>
        </div>
        <div className="service_item1t">
          <h2>Strategic Choices</h2>
          <p>Helps you decide which projects are worth focusing on.</p>
        </div>
        <div className="service_item1t">
          <h2>Ready to Scale</h2>
          <p>Points out which technologies are ready to be turned into products and sold to a lot of people.</p>
        </div>
      </section>
      <div className="service-buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSefvXQtLEjxzxtfWFAaXZgorZofOS2zO8ScsXUwmxdzFm4yNw/viewform" target="_blank" rel="noopener noreferrer">
          <button className="service_btn">Submit Your Details</button>
        </a>
        <a href="https://iiitd.ac.in/otmt/docs/IIITD%20IP%20Policy.pdf" target="_blank" rel="noopener noreferrer">
          <button className="service_btn">Policy and SOPs</button>
        </a>
        <a href="https://calendar.google.com/calendar/u/0/r/eventedit?add=alok@iiitd.ac.in&cls=0&hl=en" target="_blank" rel="noopener noreferrer">
          <button className="service_btn">Contact to evaluate TRL</button>
        </a>
      </div>
      <div id="back_block_tam">   </div>
      <FaqPopup />
    </div>
  );
}

export default Tam;

