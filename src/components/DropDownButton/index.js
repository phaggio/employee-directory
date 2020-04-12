import React from 'react';

function DropDownButton(props) {
  return (
    <>
      {
        props.sortBys.map(sortBy => (
          <button className={"dropdown-item " + sortBy.active}
            key={sortBy.key}
            data-key={sortBy.key}
            value={sortBy.name}
            onClick={props.onClick}>
            {sortBy.name}
          </button>
        ))
      }
    </>
  )
};

export default DropDownButton;