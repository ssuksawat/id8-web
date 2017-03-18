import React from 'react';

const PageDecorator = (story) => (
  <div className="story__page">
    { story() }
  </div>
);

export default PageDecorator;
