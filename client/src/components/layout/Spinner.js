import React, { Fragment } from 'react';
import spinner from './spinner2.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{
          width: '100px',
          margin: 'auto',
          display: 'block'
        }}
        alt="Loadins..."
      />
    </Fragment>
  );
};

export default Spinner;
