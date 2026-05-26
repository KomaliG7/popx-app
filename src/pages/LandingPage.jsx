import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
      <button className="btn-primary" onClick={() => navigate('/signup')}>
        Create Account
      </button>
      <button className="btn-secondary" onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;