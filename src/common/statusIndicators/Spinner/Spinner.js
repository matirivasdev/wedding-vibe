import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgress } from '@mui/material';


const Spinner = (props) => (
  <div className="spinner-container">
    <CircularProgress
      {...props}
      className="spinner"
    />
  </div>
);

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 40,
};


export default Spinner;
