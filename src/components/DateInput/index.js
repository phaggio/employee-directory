import React from 'react';

function DateInput(props) {
  return (
    <>
    <label>{props.label}</label>
    <input
      type="date"
      name={props.name}
      onChange={props.handleInputChange}
    />
    </>
  );
}

export default DateInput;