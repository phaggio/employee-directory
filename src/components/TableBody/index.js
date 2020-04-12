import React from 'react';

function TableBody(props) {
  return (
    <tbody>
      {props.employees.map(employee => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td><img alt={`img`} src={employee.image}></img></td>
          <td>{employee.firstname} {employee.lastname}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{new Date(employee.dob).toLocaleDateString()}</td>
          <td>{employee.age}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody;