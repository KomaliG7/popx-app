import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="login-page">
      <h1>Signin to your<br />PopX account</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <div className="input-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn-primary"
        onClick={() => navigate('/profile')}
        disabled={!isValid}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;