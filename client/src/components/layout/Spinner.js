import React, { Fragment } from 'react';
import spinner from './spinner.gift';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loadins..."
      />
    </Fragment>
  );
};

export default Spinner;
