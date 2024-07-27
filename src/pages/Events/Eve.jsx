// import React from "react";
// import "./Eve.css";

// import { Link } from "react-router-dom";

// function Eve() {
//   return (
//     <div className="ehome">
//       <section className="ehed">
//         <div className="event">
//           <h1>Events </h1>
//           <div className="line_eve"> hello</div>
//         </div>
//       </section>

//       <section className="event_Cards">
//         <div className="event_types">
//           <div className="event_type1">
//             <p>Upcoming Events</p>
//             <p className="disc">
//               {" "}
//               Stay tuned for upcoming events. Coming up soon.
//             </p>
//           </div>

//           <div className="event_type2">
//             <p>Past Events</p>
//             <p className="disc">
//               {" "}
//               Stay tuned for upcoming events. Coming up soon.
//             </p>

           
//             <div className="sub_cards">
//                 <div className="sub_card1">
//                   <p className="date">15-16</p>
//                   <p className="month">March 2024</p>
//                   <p className="title">RIISE 2024</p>
//                   <p className="discription">
//                     Research Innovation and Incubation Showcase Events (RIISE)
//                   </p>
//                   <p className="loc">IIIT Delhi</p>
//                   <div className="event_btn">
//                     <button className="know">Know More</button>
//                   </div>
//             </div>

//             <div className="sub_card1">
//                   <p className="date">20</p>
//                   <p className="month">November 2023</p>
//                   <p className="title">SESSION</p>
//                   <p className="discription">
//                     An introductory and informative session on Technology
//                     Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.
//                   </p>
//                   <p className="loc">C101 LHC</p>
//                   <div className="event_btn">
//                     <button className="know">Know More</button>
//                   </div>
                  
//             </div>
             
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Eve;


import React from "react";
import "./Eve.css";
import { Link } from "react-router-dom";

function Eve() {
  return (
    <div className="ehome">
      <section className="ehed">
        <div className="event">
          <h1>Events </h1>
          <div className="line_eve"> hello</div>
        </div>
      </section>

      <section className="event_Cards">
        <div className="event_types">
          <div className="event_type1">
            <p>Upcoming Events</p>
            <p className="disc">
              Stay tuned for upcoming events. Coming up soon.
            </p>
          </div>

          <div className="event_type2">
            <p>Past Events</p>
            <p className="disc">
              Stay tuned for upcoming events. Coming up soon.
            </p>

            <div className="sub_cards">
              <div className="sub_card">
                <p className="date">15-16</p>
                <p className="month">March 2024</p>
                <p className="title">RIISE 2024</p>
                <p className="description">
                  Research Innovation and Incubation Showcase Events (RIISE)
                </p>
                <p className="loc">IIIT Delhi</p>
                <div className="event_btn">
                  <button className="know">Know More</button>
                </div>
              </div>

              <div className="sub_card">
                <p className="date">20</p>
                <p className="month">November 2023</p>
                <p className="title">SESSION</p>
                <p className="description">
                  An introductory and informative session on Technology
                  Readiness Level (TRL) was conducted by Dr. Alok Nikhil Jha.
                </p>
                <p className="loc">C101 LHC</p>
                <div className="event_btn">
                  <button className="know">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="back_block_event">   </div>
      
    </div>
  );
}

export default Eve;

