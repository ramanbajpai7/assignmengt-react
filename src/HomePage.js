// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <p>Click the button below to start the contest!</p>
      <Link to="/page2">
        <button style={startButtonStyle}>Start Contest</button>
      </Link>
    </div>
  );
}

const startButtonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: '#fff',
  border: '2px solid #007bff',
  borderRadius: '25px',
  transition: 'background-color 0.3s, color 0.3s',
  textDecoration: 'none',
  display: 'inline-block'
};

export default HomePage;
