import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import './all_tech.css';

function All_tech() {
  const table_data = [
    { id: 1, name: "Example Technology 1", detail: "details about technology 1", trl: 3, sector: "ai/ml", link: "#more-details-1" },
    { id: 2, name: "Example Technology 2", detail: "details about technology 2", trl: 4, sector: "healthcare", link: "#more-details-2" },
    { id: 3, name: "Example Technology 3", detail: "details about technology 3", trl: 5, sector: "ai/ml", link: "#more-details-3" },
    { id: 4, name: "Example Technology 4", detail: "details about technology 4", trl: 3, sector: "energy", link: "#more-details-4" },
    { id: 5, name: "Example Technology 5", detail: "details about technology 5", trl: 6, sector: "ai/ml", link: "#more-details-5" },
    { id: 6, name: "Example Technology 6", detail: "details about technology 6", trl: 3, sector: "healthcare", link: "#more-details-6" },
    { id: 7, name: "Example Technology 7", detail: "details about technology 7", trl: 4, sector: "energy", link: "#more-details-7" },
    { id: 8, name: "Example Technology 8", detail: "details about technology 8", trl: 5, sector: "ai/ml", link: "#more-details-8" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [trlSearch, setTrlSearch] = useState('');
  const [sectorSearch, setSectorSearch] = useState('');
  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search inputs
  const filteredData = table_data.filter(
    tech =>
      (trlSearch === '' || tech.trl === parseInt(trlSearch)) &&
      (sectorSearch === '' || tech.sector.toLowerCase().includes(sectorSearch.toLowerCase()))
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
      <a href="https://forms.gle/your-google-form-link" className="submit-button">
        Submit Your Technology
      </a>
    </div>
  );
}

export default All_tech;
