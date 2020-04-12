import React from 'react';

function DateInput(props) {
  return (
    <div className="mx-auto">
    <label className="mr-2">{props.label}</label>
    <input
      type="date"
      name={props.name}
      onChange={props.handleInputChange}
    />
    </div>
  );
}

export default DateInput;