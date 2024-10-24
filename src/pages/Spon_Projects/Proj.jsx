import React, { useState } from 'react';
import { TablePagination } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Proj.css';

const rowsPerPageOptions = [5, 10, 15]; // Options for the number of rows per page

const ProjTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset the page to 0 when rows per page is changed
  };

  const iprData = [
    { sNo: 1, title: 'IIIT D_NVF contract', pi: 'Dr. Tarini Shankar Ghosh:', agency: 'NEW VENTURE FUND', end: '30-09-2025', dur: '2.5 Years' },
    { sNo: 2, title: 'avISense: Design and Prototype of NavIC Signal Processing Accelerator on Heterogeneous System-on-Chip for Remote Sensing” under Chips to Startup Programme', pi: 'Dr. Sumit Darak', agency: 'MEITY', end: '17.05.2028', dur: '5 Years' },
    { sNo: 3, title: 'RNA velocity independent direction resolved trajectory inference from scRNA-seq data', pi: 'Dr. Debarka Sen Gupta', agency: 'SERB', end: '02.07.2026	', dur: '3 Year' },
    { sNo: 4, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 5, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 6, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 7, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 8, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 9, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 10, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 11, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 12, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 13, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 14, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 15, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 16, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 17, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 18, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 19, title: '', pi: '', agency: '', end: '', dur: '' },
    { sNo: 20, title: '', pi: '', agency: '', end: '', dur: '' },
  ];

  const paginatedData = iprData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="proj-container">
      <h1 className="proj-title">Sponsored Research Projects</h1>
      <table className="proj-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Project Title</th>
            <th>Name of the PI</th>
            <th>Funding Agencies</th>
            <th>End Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((proj) => (
            <tr key={proj.sNo}>
              <td>{proj.sNo}</td>
              <td>{proj.title}</td>
              <td>{proj.pi}</td>
              <td>{proj.agency}</td>
              <td>{proj.end}</td>
              <td>{proj.dur}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        component="div"
        count={iprData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
      />

      {/* Explore More Button */}
      <div className="exp-moree">


       <a
          href="https://iiitd.ac.in/research/projects/srp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="exp_btnn">Explore More</button>
        </a> 
        
          
        
      </div>
    </div>
  );
};

export default ProjTable;
