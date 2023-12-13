import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signup clicked');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <div className="inputbox">
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required placeholder='Username' />
      </div>
      <div className="inputbox">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
      </div>
      <div className="inputbox">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/>
      </div>
      <button onClick={handleSignup} className='sub'> <Link to="/home" className='links1'>Signup</Link></button>
      <div className="register">
          <p>Already have an account? <Link to="/" >Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
