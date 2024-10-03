import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./all_tech.css";

function All_tech() {
  const table_data = [
    {
      id: 1,
      name: "TATDC: Trainer and Tester for Digital Circuits",
      detail:
        "This project introduces a cost-effective, portable, and low-power digital circuit trainer kit designed to serve multiple purposes in an electronics laboratory. It combines the functions of a digital trainer kit, IC tester, and voltmeter into a single device, improving efficiency and convenience for students and professionals. The compact form factor and multifunctionality eliminate the need for multiple instruments, streamlining lab experiments and facilitating quick debugging of digital circuits. This innovative solution is robust, space-saving, and unmatched in its ability to perform all three tasks within its budget.",
      trl: 7,
      sector:
        "Education Sector, Research and Development ,Consumer Electronics ,Telecommunications ,Automotive Electronics,Industrial Automation,Defense and Aerospace,Healthcare Technology",
      tech: "Embedded systems, PCB design, Firmware, Power management.",
      link: "#more-details-1",
    },
    {
      id: 2,
      name: "A SYSTEM FOR GENERATING STREAM-CIPHERED DOUBLE-KEY USING A RANDOMIZED-MATRIX FOR VARIED LENGTH TEXT AND IMAGE ",
      detail: "This project introduces a robust encryption system that employs a stream-ciphered double-key method using a randomized matrix, designed for securing both text and image data. By incorporating multiple layers of randomization and generating two keys, the system significantly enhances data security, making it resilient against future quantum computing threats. Its key features include one-time padding, easy customizability, and a complex stream cipher approach that ensures efficient encryption of varying data lengths. This technology is particularly valuable for safeguarding classified information, industrial and medical research, and sensitive transaction data against emerging cyber threats.",
      trl: "Experimental proof of Concept",
      sector: "Cybersecurity,Finance and Banking,Healthcare,Government and Defense,Telecommunications,E-commerce",
      tech: "Encryption Technology",
      link: "#more-details-2",
    },
    {
      id: 3,
      name: "Troubleshooting Mobile Systems + Mobile display",
      detail: "Presented in India Mobile ongress and Comsnet.A research paper already published. Shared with Samsung",
      trl:7,
      sector: "",
      tech: "",
      link: "#more-details-3",
    },
    {
      id: 4,
      name: "Optimization Of Tail End Latency In Edge Computing",
      detail: "We aim to study and reduce the major problem of tail latency in edge computing using deep reinforcement learning .",
      trl: 4,
      sector: "",
      tech: "",
      link: "#more-details-4",
    },
    {
      id: 5,
      name: "Web Page Load Time Analysis",
      detail: "Webpage load time in Mobile Device, no tool available`",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-5",
    },
    {
      id: 6,
      name: "Optimization of Cellular Networks",
      detail: "The project focuses on analyzing a substantial dataset to pinpoint the root causes of cellular network interference issues, including antenna misorientation, interference from neighboring cell towers, signal attenuation, and low radiating power. Utilizing real-world data from LinkQuest and leveraging data analysis tools like NumPy and pandas, the objective is to identify key features that can visualize problematic areas. This analysis will inform necessary adjustments, such as realigning the antennas of cell towers, to enhance coverage and improve signal quality, particularly in remote regions.",
      trl: 3,
      sector: "Telecommunications,,Information Technology,Data Analytic,Network Infrastructure,Research and DevelopmentUrban Planning and Development,Environmental Monitoring",
      tech: "Technology Stack Overview for Cellular Network Interference Analysis",
      link: "#more-details-6",
    },


    {
      id: 7,
      name: "Microbenchmarking and Analyzing Tadeoffs in Control of Networked Drones",
      detail: "In this report, we primarily focus on two key use cases: delivery services and tracking multiple vehicles to ascertain their precise locations. By simulating the environment and employing a path-based model, we gather data from a camera attached to a drone for further processing. Our goal is to conduct controlled studies to analyze the factors affecting latency, power consumption, cost, and overall application performance. This approach aims to optimize the effectiveness of drone technology in enhancing delivery logistics and vehicle tracking capabilities.",
      trl: 4,
      sector: "energy",
      tech: "Drones,GPS,Computer Vision,Data Analysis Tools,Simulation Software,Wireless Communication Protocols",
      link: "#more-details-7",
    },

    {
      id: 8,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    /*new ones*/
    {
      id: 9,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    
    {
      id: 10,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    
    {
      id: 11,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    
    {
      id: 12,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    
    {
      id: 13,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },
    
    {
      id: 14,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },

    
    {
      id: 15,
      name: "NATIVE: Network Aggregation based Tiled Live Video Streaming",
      detail: "details about technology 8",
      trl: 7,
      sector: "",
      tech: "",
      link: "#more-details-8",
    },



  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [trlSearch, setTrlSearch] = useState("");
  const [sectorSearch, setSectorSearch] = useState("");
  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search inputs
  const filteredData = table_data.filter(
    (tech) =>
      (trlSearch === "" || tech.trl === parseInt(trlSearch)) &&
      (sectorSearch === "" ||
        tech.sector.toLowerCase().includes(sectorSearch.toLowerCase()))
  );

  // Calculate the indices for slicing the data array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle search input changes
  const handleTrlSearchChange = (event) => {
    setTrlSearch(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSectorSearchChange = (event) => {
    setSectorSearch(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className="all">
      <h1 className="techno_title">All Technology</h1>
      <div className="search-bar">
        <input
          type="number"
          placeholder="Search by TRL"
          value={trlSearch}
          onChange={handleTrlSearchChange}
        />
        <input
          type="text"
          placeholder="Search by Sector"
          value={sectorSearch}
          onChange={handleSectorSearchChange}
        />
      </div>
      <table className="techno_table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Tech Name</th>
            <th>Tech Details</th>
            <th>TRL</th>
            <th>Sector</th>
            <th>Technology</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tech, index) => (
            <tr key={tech.id}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{tech.name}</td>
              <td>{tech.detail}</td>
              <td>{tech.trl}</td>
              <td>{tech.sector}</td>
              <td>{tech.tech}</td>
              <td>
                <a href={tech.link}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        count={Math.ceil(filteredData.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
      <a
        href="https://forms.gle/your-google-form-link"
        className="submit-button"
      >
        Submit Your Technology
      </a>
    </div>
  );
}

export default All_tech;
