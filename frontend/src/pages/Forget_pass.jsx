import React, { useState } from 'react';
import BaseLayout from '../components/BaseLayout';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Forget_pass() {
    const navigate = useNavigate();
    const [animationClass, setAnimationClass] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showErrors, setShowErrors] = useState(false); 

    const handleNavigate = (path) => {
        setAnimationClass('swipe-animation');
        setTimeout(() => navigate(path), 300);
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleForgetPass = () => {
        setShowErrors(true);
        if (emailError) {
        } else {
            console.log('Forget password successful');
            navigate('/login'); 
        }
    };

    return (
        <BaseLayout animationClass={animationClass}>
            <div>
                <h1 className="text-[#2D385E] text-2xl font-extrabold mb-2">Reset Password</h1>
                <p className="text-lg">
                    Remembered your password? <span className="text-blue-400 cursor-pointer" onClick={() => handleNavigate('/')}>Login Here</span>
                </p>
            </div>
            <div className="flex flex-col gap-10 mt-10 text-lg">
                <input
                    className="border-b-2 border-gray-300 outline-none"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                />
                {showErrors && emailError && <div className="text-red-500 text-sm -mt-6">{emailError}</div>}
            </div>
            <button className="bg-[#4F77FE] text-white mt-10 text-xl py-3 w-full border rounded-lg shadow-b" onClick={handleForgetPass}>Submit</button>
        </BaseLayout>
    );
}
