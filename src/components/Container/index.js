import React from 'react';

function Container(props) {
  // {console.log(props)}
  return (
    <div className={
      `container${props.fluid ? '-fluid' : ''} my-2`
    } {...props} />
  );
}

export default Container;
