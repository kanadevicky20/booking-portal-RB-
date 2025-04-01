import React from 'react'
import '../Component/login.css';
import { useNavigate , Link , useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();
  const Navigate=useNavigate();
  const token=sessionStorage.getItem("token");

  let isLogin=sessionStorage.getItem("islogin");

  function handleLogout(){
    sessionStorage.setItem('islogin','false');
    Navigate('/login');
  }
  function handleSetting(){
    Navigate('/setting',{state:{token:token}});
  }
  function handleBooking(){
    Navigate('/bookingdb');
  }
  
   // Define booking-related paths
   const bookingPaths = ["/booking", "/bookingdb", "/imagesummary"];
   const isBookingActive = bookingPaths.some(path => location.pathname.includes(path));

     // Define setting-related paths
  const settingPaths = ["/setting", "/profile", "/billing"];
  const isSettingActive = settingPaths.some(path => location.pathname.includes(path));


  return (
    <div>
      {/* Header Section */}
      <header className="header">
      <h1>Logo</h1>
      <nav className="header-nav">
      <a
            hidden={isLogin === "false"}
            onClick={handleBooking}
            style={{
              color: isBookingActive ? "white" : "gray",
              fontWeight: isBookingActive ? "bold" : "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = isBookingActive ? "white" : "gray")}
          >
            BOOKING
          </a>
          <a
            hidden={isLogin === "false"}
            onClick={handleSetting}
            style={{
              color: isSettingActive ? "white" : "gray",
              fontWeight: isSettingActive ? "bold" : "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = isSettingActive ? "white" : "gray")}
          >
            SETTING
          </a>
        <a
  hidden={isLogin === "false"}
  onClick={handleLogout}
  style={{
    color: location.pathname === "/logout" ? "red" : "gray",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => (e.target.style.color = "red")}
  onMouseLeave={(e) =>
    (e.target.style.color = location.pathname === "/logout" ? "red" : "gray")
  }
>
  LOGOUT
</a>


        {/* <a
          style={{ color: "gray", fontWeight: "bold", cursor: "pointer" }}
          hidden={isLogin === "false"}
          onClick={handleLogout}
        >
          LOGOUT
        </a> */}
      </nav>
    </header>

    </div>
  )
}

export default Navbar
