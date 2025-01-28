import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignup = async () => {
        setShowErrors(true);

        if (emailError || passwordError || !fullName) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                fullName,
                email,
                password,
            });

            console.log(response.data.message);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during signup:', error.response ? error.response.data.message : error.message);
        }
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

    return (
        <BaseLayout>
            <div>
                <h1 className="text-[#2D385E] text-2xl font-extrabold mb-2">Signup for Free</h1>
                <p className="text-lg">
                    Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/')}>Login Here</span>
                </p>
            </div>
            <div className="flex flex-col gap-10 mt-10 text-lg">
                <input
                    className="border-b-2 border-gray-300 outline-none"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    className="border-b-2 border-gray-300 outline-none"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                />
                {showErrors && <div className="text-red-500 text-sm -mt-6 -mb-7">{emailError}</div>}
                <div className="relative border-b-2 border-gray-300">
                    <input
                        className="outline-none w-80"
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                    />
                    <FontAwesomeIcon
                        icon={passwordVisible ? faEye : faEyeSlash}
                        className="absolute right-3 top-2 cursor-pointer w-6"
                        onClick={togglePasswordVisibility}
                    />
                </div>
                {showErrors && <div className="text-red-500 text-sm -mt-6">{passwordError}</div>}
            </div>
            <button className="bg-[#4F77FE] text-white mt-10 text-xl py-3 w-full border rounded-lg shadow-b" onClick={handleSignup}>
                Sign up with email
            </button>
        </BaseLayout>
    );
}
