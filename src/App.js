import React, { useState } from 'react';
import './App.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
 // const [isRegistered, setIsRegistered] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://34.197.71.192:4001/user/signup?language=en', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '63086f6a4c0ae5939becc6f5',
          countryCode: countryCode,
          mobile: mobile,
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Registration successful
        console.log('Registered successfully');
      } else {
        // Registration failed
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="countryCode">Country Code:</label>
          <input type="text" id="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
      import React from 'react';



    </div>
  );
};

const App = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export default App;
