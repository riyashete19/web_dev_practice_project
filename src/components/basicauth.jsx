import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
      
    if (username === 'riya' && password === 'yari@123') {
      
      setMessage('Login Successful!');
      setTimeout(() => navigate('/todo'), 1000); // Redirect to Todo page after 1 second
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ marginRight: '10px', padding: '8px' }}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: '8px' }}
        />
      </div>
      <button 
        onClick={handleLogin} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
        Login
      </button>
      <p style={{ color: 'green', marginBottom: '10px' }}>
        Tip: Username: <strong>riya</strong> & Password: <strong>yari@123</strong>
      </p>
      {message && <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>}
    </div>
    
  );
};

export default Auth;
