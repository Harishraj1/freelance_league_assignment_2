import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleNavigate = (path) => {
    setAnimationClass('swipe-animation');
    setTimeout(() => navigate(path), 300);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      setPasswordError('Password must be at least 6 characters, including one lowercase letter, one uppercase letter, and one number');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const handleLogin = async () => {
    setShowErrors(true);
    if (!emailError && !passwordError && email && password) {
      try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        if (response.status === 200) {
          localStorage.setItem('authToken', response.data.token);
          setIsAuthenticated(true);
          navigate('/dashboard');
        } else {
          alert('Login failed, please signup before login');
        }
      } catch (error) {
        console.error('Error during login:', error.response ? error.response.data.message : error.message);
        alert("Login failed, please Signup before login..!")
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <BaseLayout animationClass={animationClass}>
      <div>
        <h1 className="text-[#2D385E] text-2xl font-extrabold mb-2">Login to your account</h1>
        <p className="text-lg">
          Don't have an account?{' '}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => handleNavigate('/signup')}
          >
            Sign Up Free!
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-10 text-lg">
        <input
          className="border-b-2 border-gray-300 outline-none mb-4"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
        />
        {showErrors && <div className="text-red-500 text-sm -mt-10">{emailError}</div>}
        <div className="relative border-b-2 border-gray-300">
          <input
            className="outline-none w-80"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
          <FontAwesomeIcon
            icon={passwordVisible ? faEye : faEyeSlash}
            className="absolute right-3 top-2 cursor-pointer w-6"
            onClick={togglePasswordVisibility}
          />
        </div>
        {showErrors && <div className="text-red-500 text-sm -mt-5">{passwordError}</div>}
      </div>
      <div className="flex mt-10 justify-between items-center text-lg">
        <div className="flex items-center">
          <input
            className="text-lg"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value="rememberMe"
          />
          <label htmlFor="rememberMe" className="ml-2 text-lg">
            Remember me
          </label>
        </div>
        <p
          className="text-blue-400 cursor-pointer"
          onClick={() => handleNavigate('/forget_pass')}
        >
          Forgot password?
        </p>
      </div>
      <button
        className="bg-[#4F77FE] text-white mt-10 text-xl py-3 w-full border rounded-lg shadow-b"
        onClick={handleLogin}
      >
        Login with email
      </button>
    </BaseLayout>
  );
}
