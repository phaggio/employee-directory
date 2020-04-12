import React from 'react';
import TableHeader from '../TableHeader';
import TableBody from '../TableBody';

function EmployeeTable(props) {
  return (
    <table className="table table-striped table-bordered sortable">
      <TableHeader headerNames={props.headerNames} />
      <TableBody employees={props.employees} />
    </table>
  );
}

export default EmployeeTable;