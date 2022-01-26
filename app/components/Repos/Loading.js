import React from 'react';

const Spinner = () => (
  <>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <span style={{ margin: '1rem' }}>
      <b>Loading...</b>
    </span>
  </>
);

export default Spinner;
