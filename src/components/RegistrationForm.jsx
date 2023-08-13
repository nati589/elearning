import React, { useState } from 'react';
import GoogleIcon from "../assets/search.png";
import FacebookIcon from "../assets/facebook.png";
import AppleIcon from "../assets/apple.png";


const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Registration form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f5fa]">
      <div className="bg-white p-4 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border rounded-md"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Register
          </button>
             <div className="mt-4">
            <p className="text-gray-600 text-center">Or </p>
            <div className="flex flex-col space-y-2 mt-2">
              <a
                href="https://accounts.google.com/o/oauth2/v2/auth?client_id=123&redirect_uri=https://example.com/auth/google/callback&response_type=code&scope=profile%20email&access_type=offline"
                className="p-4 bg-white text-gray-700 border border-gray-300 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300"
              >
                <img src={GoogleIcon} alt="Google Icon" className="h-6 w-6 fill-current text-gray-700" />
                <span className="text-base font-medium">Sign up with Google</span>
              </a>
              <a
                href="https://www.facebook.com/v9.0/dialog/oauth?client_id=123&redirect_uri=https://example.com/auth/facebook/callback&state=987://accounts.google.com/o/oauth2/v2/auth?client_id=123&redirect_uri=https://example.com/auth/google/callback&response_type=code&scope=profile%20email&access_type=offline"
                className="p-4 bg-white text-gray-700 border border-gray-300 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300"
              >
                <img src={FacebookIcon} alt="Facebook Icon" className="h-6 w-6 fill-current text-gray-700" />
                <span className="text-base font-medium">Sign up with Facebook</span>
              </a>
              <a
                href="https://appleid.apple.com/auth/authorize?client_id=com.example.app&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&response_type=code&state=123456"
                className="p-4 bg-white text-gray-700 border border-gray-300 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300"
              >
                <img src={AppleIcon} alt="Apple Icon" className="h-6 w-6 fill-current text-gray-700" />
                <span className="text-1g font-medium  text-center">Sign up with Apple</span>
              </a>
            </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
