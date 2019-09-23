import React from 'react';


const PortfolioItem = (props) => {
  return (
  <div>
  <h1>A think ive done</h1>
    <p>Page with item {props.match.params.id}</p>
  </div>
  );
  };

export default PortfolioItem;