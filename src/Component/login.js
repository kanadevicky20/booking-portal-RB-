import React, { useState } from 'react';
import "../Component/login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../API Manager/userFunctions';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [loginData,setLoginData]=useState({username:'',password:''});
  const navigate = useNavigate();

  // {
  //   "email": "eve.holt@reqres.in",
  //   "password": "cityslicka"
  // }

  // // Show alert only once when the page loads
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("Welcome to the Ad Agent Login Page!");
  //   }, 100); // Small delay to ensure smoother user experience
  // }, []);

  async function handleLogin() {

    if (loginData.username != '' && loginData.password != '') {
      const res=await loginUser(loginData);
      if(res){
        console.log("res from api:",res);
        if(res.data.token){
          sessionStorage.setItem("islogin", 'true');
          sessionStorage.setItem("token", res.data.token);
          navigate('/bookingdb', { state: { token: res.data?.token } });
        }
    } 
  }
  else{
    alert('Wrong Credentials or no data entered');
  }
}

  function handleChange(e){
      setLoginData({...loginData,[e.target.name]:e.target.value});
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

          <div className="input-group-login">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="user@example.com"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              required
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} // Press Enter to Login
            />
          </div>

          <div className="input-group-login">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="password123"
              name='password'
              value={loginData.password}
              onChange={handleChange} 
              required
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} // Press Enter to Login
            />
          </div>

          <button className="button-login" onClick={handleLogin}>Login</button>

          <p>
            Don't have an account? <Link to="/signup">Sign-Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
