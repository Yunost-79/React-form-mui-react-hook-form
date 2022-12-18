import { TextField } from '@mui/material';
import React from 'react';

import './CustomTextField.scss';

export const CustomTextField = (props) => {
  const { children, className, ...restProps } = props;

  return <TextField className={`Mui-yopta-input ${className ? className : ''}`} variant="standard" margin="normal" fullWidth {...restProps} />;
};
