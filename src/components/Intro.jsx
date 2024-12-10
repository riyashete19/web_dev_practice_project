import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth'); // Navigate to the Auth page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Application</h1>
      
      <button 
        onClick={handleGetStarted} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Get Started
      </button>
    </div>
  );
};

export default Intro;
