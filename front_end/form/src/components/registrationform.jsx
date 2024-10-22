import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:9000/api/users/register', formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message || 'Error occurred');
    }
  };

  return (
    <div style={{backgroundColor:"GrayText" ,height:"350px",width:'300px',justifyContent:"center",marginLeft:"250px",borderRadius:"10px"}}>
      <h2 style={{paddingTop:'10px'}}>Register</h2>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        
          <input 
            placeholder='enter username'
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        
        <br/>
        <br/>
        
          <input
          placeholder='enter email'
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        
        <br/>
        <br/>
        
          <input
          placeholder='enter password'
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        
        <br/>
        <br/>
        <button   type="submit">Register</button>
      </form>
      <br/>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
