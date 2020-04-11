import React from 'react';

function QuickSearch(props) {
  return (

    <form className="search">
      <div className="form-group">
        <label>{props.label}</label>
        <input
          name={props.name}
          onChange={props.handleNameInputChange}
          type="text"
          className="form-control"
        />
      </div>
    </form>

  )

}

export default QuickSearch;
