import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '',
    password: '', company: '', isAgency: 'yes',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fields = [
    { label: 'Full Name*',      name: 'fullName',  type: 'text',     placeholder: 'Marry Doe' },
    { label: 'Phone number*',   name: 'phone',     type: 'tel',      placeholder: '+91 00000 00000' },
    { label: 'Email address*',  name: 'email',     type: 'email',    placeholder: 'name@email.com' },
    { label: 'Password *',      name: 'password',  type: 'password', placeholder: 'Min. 8 characters' },
    { label: 'Company name',    name: 'company',   type: 'text',     placeholder: 'Your company' },
  ];

  const handleSubmit = () => {
    // Pass form data to profile page via navigation state
    navigate('/profile', { state: { user: form } });
  };

  return (
    <div className="signup-page">
      <h1>Create your<br />PopX account</h1>

      {fields.map(({ label, name, type, placeholder }) => (
        <div className="input-group" key={name}>
          <label>{label}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={form[name]}
            onChange={handleChange}
          />
        </div>
      ))}

      <div className="radio-group">
        <p>Are you an Agency?*</p>
        <div className="radio-options">
          {['yes', 'no'].map((val) => (
            <label key={val}>
              <input
                type="radio"
                name="isAgency"
                value={val}
                checked={form.isAgency === val}
                onChange={handleChange}
              />
              {val === 'yes' ? 'Yes' : 'No'}
            </label>
          ))}
        </div>
      </div>

      <button className="btn-primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default SignupPage;