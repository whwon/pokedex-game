import React from 'react';

const BackDrop = (props) => (
  <div className="BackDrop" onClick={() => props.toggleDrawer(false)}></div>
);

export default BackDrop;
