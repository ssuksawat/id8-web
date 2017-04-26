import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = (props) => {
  const { onClick } = props; // Actions
  const { small, large, xlarge } = props; // Sizes
  const { primary, secondary, danger } = props; // Colors
  const { outlined, link } = props; // Types
  const { disabled, loading } = props; // States

  const classes = classNames({
    'btn': true,
    'btn--sm': small,
    'btn--lg': large,
    'btn--xlg': xlarge,
    'btn--primary': primary,
    'btn--secondary': secondary,
    'btn--danger': danger,
    'btn--outlined': outlined,
    'btn--link': link,
    'is-loading': loading
  });

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {props.children}
    </button>
  );
};

export default Button;
