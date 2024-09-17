import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pages.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Basic validation checks
  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      /\S+@\S+\.\S+/.test(email)  // Basic email validation regex
    );
  };

  const handleLinkClick =  () => {
    if (!isFormValid()) {
      e.preventDefault();  // Prevent navigation if form is not valid
    }
    createUserWithEmailAndPassword(auth,email,password)
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
          <span className="title">Register</span>
          <form>
            <input
              type="text"
              placeholder='Name'
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              className={`SignUp no-underline text-center ${isFormValid() ? '' : 'disabled'}`}
              to='/dashboard'
              onClick={handleLinkClick}
            >
              Signup
            </Link>
          </form>
          <p>
            You do have an account?{' '}
            <Link
              className='no-underline'
              to='/login'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
