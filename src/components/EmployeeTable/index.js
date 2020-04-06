import React from 'react';

function EmployeeTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <tr key={employee.id.value}>
            <th scope="row">{props.employees.indexOf(employee) + 1}</th>
            <td><img alt="employee image" src={employee.picture.thumbnail}></img></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob.date.slice(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;