import React from 'react';

function DropDownButton(props) {
  return (
    <>
      {
        props.sortBys.map(sortBy => (
          <button className={"dropdown-item " + sortBy.active}
            key={sortBy.key}
            value={sortBy.key}
            onClick={props.onClick}>
            {sortBy.name}
          </button>
        ))
      }
    </>
  )
};

export default DropDownButton;