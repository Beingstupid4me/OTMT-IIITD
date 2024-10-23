import React, { useState } from 'react';
import { TablePagination } from '@mui/material';
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
    setP
  const iprData = [
    { sNo: 1, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 2, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 3, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 4, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 5, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 6, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 7, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 8, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 9, title: '', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 10, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 11, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 12, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 13, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 14, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 15, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 16, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 17, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 18, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 19, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
    { sNo: 20, title:'', No: '', pi:'', agency:'', amnt:'', start:'', end:'', dur:'', link:'' },
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
            <th>Sanction Order No/ MoU/ Award Letters</th>
            <th>Name of the PI</th>
            <th>Funding Agencies</th>
            <th>Total Sanction Amount Rs.</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
            <th>Link of S.O/MoU/Letter</th>

          </tr>
        </thead>
        <tbody>
          {paginatedData.map((proj) => (
            <tr key={proj.sNo}>
              <td>{proj.sNo}</td>
              <td>{proj.title}</td>
              <td>{proj.No}</td>
              <td>{proj.pi}</td>
              <td>{proj.agency}</td>
              <td>{proj.amnt}</td>
              <td>{proj.start}</td>
              <td>{proj.end}</td>
              <td>{proj.dur}</td>
              <td>
                <a href={proj.link}>View</a>
              </td>
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
    </div>
  );
};

export default ProjTable;
