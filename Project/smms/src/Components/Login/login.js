import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login clicked');
    };

    return (
        <div className='body'>
        <div className="login-container">
            <h2>Login</h2>
            <div className="inputbox">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email'/>
            </div>
            <div className="inputbox">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/>
            </div>
            {/* <div className="forget">
            <label>
                <input type="checkbox" />Remember Me <Link to="#">Forget Password</Link>
            </label>
            </div> */}
            <button type='submit' onClick={handleLogin} className='sub'> <Link to="/home" className='links'>Login</Link> </button>
            <div className="register">
                <p>Don't have an account <Link to="/signup">Register</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;
