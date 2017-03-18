import React from 'react';
import classNames from 'classnames';
import './input.css';

const Input = ({ label, size, error, ...elementProps }) => {
  const classes = classNames({
    'input': true,
    'input--sm': size === 'small',
    'input--lg': size === 'large',
    'is-error': error
  })

  return (
    <input className={classes} {...elementProps} />
  );
};

export default Input;
