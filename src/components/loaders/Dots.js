import React from 'react';
import classNames from 'classnames';
import './dots.css';

const Dots = ({ small, large, dark }) => {
  const classes = classNames({
    'loadingDots': true,
    'loadingDots--sm': small,
    'loadingDots--lg': large,
    'loadingDots--dark': dark
  });

  return (
    <div className={classes}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Dots;
