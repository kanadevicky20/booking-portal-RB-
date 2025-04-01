import React, { useState } from 'react';
import "../index.css";
import "../Component/login.css";
import { Link, useNavigate } from "react-router-dom";
import randomInteger from 'random-int';

function LoginOtp() {
  const [otp, setOtp] = useState(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showResendOtp, setShowResendOtp] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(false);
  const [hideEmailAndMobile, setHideEmailAndMobile] = useState(false);
  const [hideOtpSection, setHideOtpSection] = useState(false);

  const navigate = useNavigate();

  function generateOTP() {
    let number = randomInteger(100000, 999999);
    setOtp(number);
    setShowOtpInput(true);
    setShowResendOtp(false);
    setShowVerifyButton(true);
    alert(`Your OTP - ${number}`);
  }

  function handleOTP() {
    generateOTP();
  }

  function handleResendOTP() {
    generateOTP();
  }

  function handleVerifyOTP() {
    if (enteredOtp === otp?.toString()) {
      setShowPasswordFields(true);
      setShowResendOtp(false);
      setShowVerifyButton(false);
      setHideEmailAndMobile(true);
      setHideOtpSection(true);
    } else {
      alert("Invalid OTP, please try again.");
      setShowResendOtp(true);
    }
  }

  function handleSignIn() {
    if (password === confirmPassword && password.length > 0) {
      alert("Signing in...");
      navigate('/login');
    } else {
      alert("Passwords do not match or are empty.");
    }
  }

  return (
    <div className="login-box">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Logo</h1>
        <p>Advertisements Portal</p>
      </div>

      {/* Login Form */}
      <div className="form-container">
        <div className='form-center'>
          <h2>Ad Agent Login</h2>

          {!hideEmailAndMobile && (
            <>
              <div className="input-group-login">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="user@example.com" 
                  onKeyDown={(e) => e.key === "Enter" && handleOTP()} // Press Enter to GET OTP
                />
              </div>
              <div className="input-group-login">
                <label>Mobile No</label>
                <input 
                  type="tel" 
                  placeholder="mobile-number" 
                  onKeyDown={(e) => e.key === "Enter" && handleOTP()} // Press Enter to GET OTP
                />
              </div>
            </>
          )}

          {!hideOtpSection && showOtpInput && (
            <div className="input-group-login">
              <label>Enter OTP</label>
              <input 
                type="text" 
                placeholder="Enter OTP" 
                value={enteredOtp} 
                onChange={(e) => setEnteredOtp(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerifyOTP()} // Press Enter to Verify OTP
              />
            </div>
          )}

          {!hideOtpSection && showVerifyButton && (
            <button className="button-login" onClick={handleVerifyOTP}>Verify OTP</button>
          )}

          {!hideOtpSection && showResendOtp && (
            <button className="button-login" onClick={handleResendOTP}>Resend OTP</button>
          )}

          {!hideOtpSection && !showOtpInput && (
            <button className="button-login" onClick={handleOTP}>GET OTP</button>
          )}

          {showPasswordFields && (
            <>
              <div className="input-group-login">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="Enter password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()} // Press Enter to Sign In
                />
              </div>
              <div className="input-group-login">
                <label>Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm password" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()} // Press Enter to Sign In
                />
              </div>
              <button className="button-login" onClick={handleSignIn}>Sign In</button>
            </>
          )}
          
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginOtp;
