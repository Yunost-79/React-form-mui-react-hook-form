import React from 'react';

import { Typography } from '@mui/material';
import { CustomButton } from '../../component/muiUI/CustomButton/CustomButton';
import { CustomLink } from '../../component/muiUI/CustomLink/CustomLink';
import { CustomTextField } from '../../component/muiUI/CustomTextField/CustomTextField';

export const FormLogin = () => {

  return (
    <>
      <form className="auth_form" >
        <Typography className="form_subtitle" variant="h3">
          Login
        </Typography>
        <CustomTextField label="E-mail" placeholder="Enter your e-mail..." type="email" required autoFocus />
        <CustomTextField label="Password" placeholder="Enter your password..." type="password" required />
        <CustomButton className="form_button" type="submit" value="Submit">
          Login
        </CustomButton>
        <CustomLink path="/sign-up" className="form_link">
          or Sign up
        </CustomLink>
      </form>
    </>
  );
};
