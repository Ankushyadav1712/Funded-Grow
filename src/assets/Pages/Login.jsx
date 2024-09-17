import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pages.css'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Basic validation checks

  const isFormValid = () => {
    return (
      email.trim() !== '' &&
      password.trim() !== '' &&
      /\S+@\S+\.\S+/.test(email)  
    );
  };

  const handleLinkClick = async() => {
    if (!isFormValid()) {
      e.preventDefault();  // Prevent navigation if form is not valid
    }
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  };

  return (
    <div>
      <div className='formContainer'>
        <div className='formWapper'>
          <span className="logo">Funded Grow</span>
          <span className="title">Login</span>
          <form>
            <input
              type="email"
              placeholder='Email'
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link
              className={`SignIn no-underline text-center ${isFormValid() ? '' : 'disabled'}`}
              to='/dashboard'
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </form>
          <p>
            You don't have an account?{' '}
            <Link
              className='no-underline'
              to='/register'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
