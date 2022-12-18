import React from 'react';

import { Button } from '@mui/material';

import './CustomButton.scss';

export const CustomButton = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <Button variant="contained" size="large" className={`Mui-yopta-button ${className ? className : ''}`} {...restProps}>
      {children}
    </Button>
  );
};
