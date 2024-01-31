import React from 'react';

const ResetPassword = ({ resetUrl }) => {
  return (
    <>
     
     
       
       
          <div className="container">
            <h1>Reset Password</h1>
            <p>To reset your password, click the button below:</p>
            <a className="button blue"style={{ color: '#fff' }} href={resetUrl} target="_blank" rel="noopener noreferrer">
              Reset Password
            </a>
          </div>
       
      
    </>
  );
};

export default ResetPassword;
