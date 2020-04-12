import React from 'react';

function Row(props) {
  return <div className={`row${props.fluid ? '-fluid' : ''} my-2`} {...props} />;
}

export default Row;
