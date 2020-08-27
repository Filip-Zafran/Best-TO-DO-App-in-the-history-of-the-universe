import React from 'react';

const Link = ({ active, onClick, children }) => (
  <button
    onClick={ onClick }
    disabled={ active }
    style={{
      marginLeft: '6px',
backgroundColor: 'red'
    }}
  >
    {children}
  </button>
);

export default Link;