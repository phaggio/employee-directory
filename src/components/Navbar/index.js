import React from 'react';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mx-auto h1">Employee Directory</span>
    </nav>
  );
}

export default Navbar;
