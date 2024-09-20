import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './pages.css';
import './Login.css';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUpdate, setLoginUpdate] = useState('/login');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      navigate('/Login');      // Automatically redirect if user is already logged in
    }
  }, [navigate]);

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
    setLoading(true);
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      setLoginUpdate('/dashboard');

      localStorage.setItem('user', JSON.stringify(user));

      console.log(user);
      
// loader for dashboard 

      setTimeout(() => {
        setLoading(false);  
        navigate('/dashboard');  
      }, 3000);
    })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Fail to login ");
      console.log(errorCode,errorMessage);
      setLoading(false);

    });
  };

  return (
    <div>
      {loading?(
        <div className='loader-container'>
         <div className="loader"></div> 
         </div>
         ) : (
      
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
              onClick={handleLinkClick}
              to = {loginUpdate}
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
      )}
    </div>
         
  );
};

export default Login;
