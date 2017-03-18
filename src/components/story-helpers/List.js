import React from 'react';
import classNames from 'classnames';

const List = ({ horizontal, children }) => {
  const classes = classNames({
    'story__list': true,
    'story__list--horizontal': horizontal
  });

  return (
    <ul className={classes}>{ children }</ul>
  );
};

export default List;
