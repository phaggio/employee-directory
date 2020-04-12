import React from 'react';

function QuickSearch(props) {
  return (

    <form>
      <div className="form-group row">
        <label className="col-form-label col-sm-3">{props.label}</label>
        <div className="col-sm-9 d-flex align-items-center">
          <input
            name={props.name}
            onChange={props.handleInputChange}
            type="text"
            className="form-control"
            placeholder="enter employee name here"
          />
        </div>
      </div>
    </form>

  )

}

export default QuickSearch;
