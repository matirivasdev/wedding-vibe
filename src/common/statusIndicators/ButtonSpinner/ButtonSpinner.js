import React from 'react';
import { CircularProgress } from '@mui/material';


const ButtonSpinner = () => (
  <div className="button-spinner-container">
    <CircularProgress
      size={24}
      color="inherit"
    />
  </div>
);

export default ButtonSpinner;
