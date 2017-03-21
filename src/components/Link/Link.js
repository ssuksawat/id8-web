import React from 'react';
import classNames from 'classnames';
import './link.css';

const Link = ({ primary, light, dark, children, ...elementProps }) => {
  const classes = classNames({
    'link': true,
    'link--primary': primary,
    'link--light': light,
    'link--dark': dark
  });

  return (
    <a className={classes} {...elementProps}>{children}</a>
  );
};

export default Link;
