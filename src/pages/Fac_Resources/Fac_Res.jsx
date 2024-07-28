import React from 'react';
import './Fac_Res.css';

const ResourceItem = ({ title }) => (
  <div className="fac_item">
    <h2>{title}</h2>
  </div>
);

const ResourcesPage = () => (
  <div className="our_ser">
    <div className="introduce">
      <h1>Resources for Faculty & Staff</h1>
      <div
          className="title_underline"
          style={{
            height: "0.6rem",
            width: "35vh",
            marginLeft: "9vh",
            marginTop: "2vh",
          }}
        >
          {" "}
          hello
        </div>

      <p>
        At Technology Transfer Office IIIT Delhi, we bridge academia and innovation, transforming research into societal benefits. Our dynamic ecosystem fosters intellectual property and transcends academic boundaries, driving innovation forward. We facilitate technology transfer to ensure scientific discoveries benefit society, securing market exclusivity for novel products. By encouraging collaboration across sectors, we fuel regional development. Through policy support and practical guides, we nurture faculty talents for commercial success and societal impact. Join us to unlock the full potential of your innovations and shape tomorrow's landscape.
      </p>
    </div>
    <div className="ser_list_sec">
      <div className="fac_services">
        <ResourceItem title="Innovate and Collaborate" />
        <ResourceItem title="Exploring Funding for Your Research Work" />
        <ResourceItem title="Engage with Us" />
        <ResourceItem title="Open for Consulting and Contract Research" />
        <ResourceItem title="From Concept to Market" />
        <ResourceItem title="Wish to Start Your Venture" />
        <ResourceItem title="Secure Your Innovations" />
      </div>
    </div>
      <div className="back_block_fac"></div>
  </div>
);

export default ResourcesPage;
