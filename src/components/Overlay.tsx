import React from 'react';

const Overlay = () => {
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#161616', // Black color with 50% opacity
    zIndex: -1, // Ensures the overlay is above other content
  };

  return <div style={overlayStyle}></div>;
};

export default Overlay;
