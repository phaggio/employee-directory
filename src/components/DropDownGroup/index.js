import React from 'react';
import DropDownButton from '../DropDownButton';

function DropDownGroup(props) {
  return (
    <div className="dropdown">
      <button className="btn btn-info dropdown-toggle"
        type="button" id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort by:
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {
          <DropDownButton sortBys={props.sortBys} onClick={props.updateSortBy}/>
        }
      </div>
    </div>
  )
};

export default DropDownGroup;