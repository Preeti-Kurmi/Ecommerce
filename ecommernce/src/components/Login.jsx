
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const URL="http://localhost:8000/auth/google/callback"
  const googleAuth=()=>{
    window.open(
      `${URL}`,
      "_self"
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);
      setMessage('Login successful!');

      dispatch(
        login({
          role: response.data.role,
          token: response.data.token,
        })
      );
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="max-w-md w-full bg-pink-300 p-6 rounded shadow ml-[600px] my-36">
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        <div className="mt-4">
        <button
          onClick={googleAuth}
          className="flex items-center justify-center w-full border border-gray-300 bg-white py-2 rounded shadow-md hover:bg-gray-100"
        >
          <FcGoogle />
          Sign in with Google
        </button>
      </div>
      </form>
      <Link className='text-blue-700 text-center' to="/signup">New User</Link>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default Login;
