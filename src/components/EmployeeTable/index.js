import React from 'react';

function EmployeeTable(props) {
  return (
    <table className="table table-striped table-bordered sortable">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>

          <th scope="col" data-sortable="true">
            <div className="d-flex justify-content-between align-item-center" scope="col">
              Name
              <i className="fa fa-fw fa-sort my-auto"></i>
            </div>
          </th>

          <th scope="col">
            <div className="d-flex justify-content-between align-item-center" scope="col">
              Phone
              <i className="fa fa-fw fa-sort my-auto"></i>
            </div>
          </th>

          <th scope="col">
            <div className="d-flex justify-content-between align-item-center" scope="col">
              Email
            <i className="fa fa-fw fa-sort my-auto"></i>
            </div>
          </th>
          <th scope="col">
            <div className="d-flex justify-content-between align-item-center" scope="col">
              DOB
            <i className="fa fa-fw fa-sort my-auto"></i>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <tr key={employee.id.value}>
            <th scope="row">{props.employees.indexOf(employee) + 1}</th>
            <td><img alt={`img`} src={employee.picture.medium}></img></td>
            <td>{employee.name.first} {employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;