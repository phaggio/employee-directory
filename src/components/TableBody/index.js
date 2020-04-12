import React from 'react';

function TableBody(props) {
  return (
    <tbody>
      {props.employees.map(employee => (
        <tr key={employee.id.value}>
          <td>{employee.id.value}</td>
          <td><img alt={`img`} src={employee.picture.medium}></img></td>
          <td>{employee.name.first} {employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
          <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
          <td>{employee.dob.age}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody;