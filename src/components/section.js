import React from 'react';
import './Section.css'; // Add styles if needed

function Section({ color, children }) {
  return (
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {children}
    </div>
  );
}

export default Section;
