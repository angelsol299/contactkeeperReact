import React from 'react';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About Contact Manager</h1>
      <p className="my-1" style={{ fontWeight: 'bold' }}>
        This is a full stack React web application
      </p>
      <p className="my-1">
        It is built with Reactjs, Expressjs, MongoDB, NodeJS and Material UI
        React
      </p>
      <p className="my-1">
        And it was developed by{' '}
        <span style={{ fontStyle: 'italic' }}>Angel Osoria</span>
      </p>
      <p className="bg-dark p" style={{ backgroundColor: 'darkGrey' }}>
        <strong>Version:</strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
