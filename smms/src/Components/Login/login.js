import React , { useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login  = () => {
  const nav=useNavigate()
  const[username, SetUsername] = useState('');
  const[password, SetPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    if(username === ''){
      alert('Username must be filled');
    }
    else if(password === ''){
      alert('Password must be filled');
    }
    else if(username==="sample"&&password==="sample"){
       nav("/Home")
    }
   else if(username!=="sample" && password!=="sample"){
      nav("/Signup")
    }
  }

  return (
    <body>
    <div className='wrap'>
      <form method='post'>
        <h1>Login</h1>
        <div className="input-box">
          <input 
          type="text" 
          placeholder='Username' 
          id='name'
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          required
          />
        </div>
        <div className="input-box">
          <input 
          type="password" 
          minLength={8} 
          placeholder='Password' 
          id='pass'
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          required/>
        </div>
        
          <button type='submit' onClick={handleLogin}>Login</button>
          <br/>
        <div className='register2'>
            <p>
              Don't have an account?
              <Link to='/Signup' className='links'> Signup </Link>
              <Link to='/adminlogin' className='links'> Admin? </Link>
            </p>
        </div>
      </form>
    </div>
    </body>
  )
}

export default Login;