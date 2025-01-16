import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "" });
  const [message, setMessage] = useState("");
  const navigate=useNavigate();
  const API_BASE_URL = import.meta.env.VITE_APP_URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData,"form")
      const response = await axios.post(`${API_BASE_URL}/api/signup`, formData);
      setMessage(response.data.message);
      setFormData({
        name:"",
        email:"",
        password:"",
        role:"",
      })
      navigate("/login")

      console.log("data",response.data)
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="max-w-md w-full bg-pink-300 p-6 rounded shadow ml-[600px] my-36">
      <h2 className="text-2xl font-semibold text-center">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-3 py-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
        <select
          name="role"
          className="w-full px-3 py-2 border rounded"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
      </form>
      <p className="m-2 pl-1">Already have an account ?<Link to="/login" className="p-2">Login</Link></p>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default Signup;
