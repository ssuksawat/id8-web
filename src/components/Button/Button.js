import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = ({
  children,
  onClick,
  small,
  large,
  xlarge
}) => {
  const classes = classNames({
    btn: true,
    'btn--sm': small,
    'btn--lg': large,
    'btn--xlg': xlarge
  });
  console.log('classnames ', classes);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

export default Button;
