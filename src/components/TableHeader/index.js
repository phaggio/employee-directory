import React from 'react';

function TableHeader(props) {

  return (
    <thead>
      <tr>
        {props.headerNames.map(headerName => (
          <th scope="col" key={headerName}>
            <div className="d-flex justify-content-between align-item-center">
              {headerName}
              {/* <i className="fa fa-fw fa-sort my-auto"></i> */}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;