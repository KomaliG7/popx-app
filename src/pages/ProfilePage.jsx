import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();

  const user = location.state?.user || {
    fullName: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    company: '',
    isAgency: 'yes',
  };

  
  const femaleNames = [
    'mary', 'marry', 'maria', 'emma', 'olivia', 'sophia', 'isabella', 'ava',
    'mia', 'emily', 'abigail', 'madison', 'charlotte', 'amelia', 'harper',
    'ella', 'lily', 'grace', 'victoria', 'scarlett', 'hannah', 'addison',
    'natalie', 'zoey', 'lillian', 'sarah', 'jessica', 'samantha', 'ashley',
    'elizabeth', 'taylor', 'alexis', 'rachel', 'amanda', 'stephanie', 'lauren',
    'jennifer', 'anna', 'julia', 'alice', 'diana', 'selena', 'priya', 'sneha',
    'ananya', 'divya', 'pooja', 'neha', 'shreya', 'kavya', 'lakshmi', 'meena',
    'sita', 'geetha', 'rekha', 'sunita', 'padma', 'nisha', 'riya', 'tanvi',
    'swathi', 'deepa', 'asha', 'hema', 'radha', 'usha', 'vani', 'latha',
  ];

  const detectGender = (fullName) => {
    const firstName = fullName.trim().split(' ')[0].toLowerCase();
    return femaleNames.includes(firstName) ? 'female' : 'male';
  };

  
  const getAvatar = (fullName) => {
    const gender = detectGender(fullName);
    const firstName = fullName.trim().split(' ')[0].toLowerCase();

    
    const charSum = firstName.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

    if (gender === 'female') {
      
      const femaleIds = [1, 5, 9, 10, 16, 21, 25, 26, 33, 39, 44, 47, 49, 64];
      const idx = charSum % femaleIds.length;
      return `https://i.pravatar.cc/100?img=${femaleIds[idx]}`;
    } else {
      
      const maleIds = [3, 6, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19, 20, 52, 57, 68];
      const idx = charSum % maleIds.length;
      return `https://i.pravatar.cc/100?img=${maleIds[idx]}`;
    }
  };

  
  const generateBio = (user) => {
    const agencyText = user.isAgency === 'yes' ? 'an agency' : 'an individual';
    const companyText = user.company ? `at ${user.company}` : '';
    return `${user.fullName} is ${agencyText} ${companyText} and can be reached at ${user.email}.${
      user.phone ? ` Contact number: ${user.phone}.` : ''
    } Passionate about building great products and delivering excellent results.`;
  };

  return (
    <div>
      <div className="profile-header">
        <h2>Account Settings</h2>
      </div>
      <div className="profile-info">
        <div className="profile-top">

          
          <div className="avatar-wrapper">
            <img
              src={getAvatar(user.fullName)}
              alt="avatar"
            />
            
            <div className="camera-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="12"
                height="12"
              >
                <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
                <path d="M20 4h-3.17l-1.24-1.35A2 2 0 0 0 14.12 2H9.88a2 2 0
                  0 0-1.47.65L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2
                  2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-8 13a5 5 0 1 1
                  0-10 5 5 0 0 1 0 10z"
                />
              </svg>
            </div>
          </div>

          <div>
            <p className="profile-name">{user.fullName}</p>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        
        <p className="profile-bio">
          {generateBio(user)}
        </p>

      </div>
    </div>
  );
};

export default ProfilePage;