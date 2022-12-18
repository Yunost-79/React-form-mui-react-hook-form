import { Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import './AuthPage.scss';

export const AuthPage = () => {
  return (
    <div className="auth_page">
      <div className="auth_block">
        <Typography className="form_title" variant="h2">
          React Form
        </Typography>
        <Outlet />
      </div>
    </div>
  );
};
