import { Link } from 'react-router-dom';
import React from 'react';

import './CustomLink.scss';

export const CustomLink = (props) => {
  const { children, className, path, ...restProps } = props;
  return (
    <Link to={path} className={`React-yopta-link ${className ? className : ''}`} {...restProps}>
      {children}
    </Link>
  );
};
