import React from 'react';
import { Typography } from '@mui/material';
import { CustomButton } from '../../component/muiUI/CustomButton/CustomButton';
import { CustomLink } from '../../component/muiUI/CustomLink/CustomLink';
import { CustomTextField } from '../../component/muiUI/CustomTextField/CustomTextField';

export const FormSignUp = () => {
  return (
    <>
      <form className="auth_form">
        <Typography className="form_subtitle" variant="h3">
          Sign Up
        </Typography>
        <CustomTextField label="First name" placeholder="Enter your first first name..." type="FirstName" required autoFocus />
        <CustomTextField label="Last name" placeholder="Enter your last name..." type="LastName" autoFocus />
        <CustomTextField label="E-mail" placeholder="Enter your e-mail..." type="email" required autoFocus />
        <CustomTextField label="Create password" placeholder="Enter your password..." required type="password" />
        <CustomButton className="form_button" type="submit" value="Submit">
          Sign up
        </CustomButton>
        <CustomLink path='/' className="form_link">or Sign up</CustomLink>
      </form>
    </>
  );
};
