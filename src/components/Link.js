import React from 'react';

const Link = ({ active, setVisibilityFilterOnClick, children }) => { 
  const classNamesList = `btn ${active ? 'btn--active' : ''}`;

  return (
    <button
      className={classNamesList}
      onClick={() => setVisibilityFilterOnClick()}
    >
      {children}
    </button>
  );
};

export default Link;


