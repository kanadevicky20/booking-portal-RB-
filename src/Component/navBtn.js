import React from "react";
import "../Component/navBtn.css"; // Import CSS for styling
import { Navigate, useNavigate } from "react-router-dom";

const NavigationButtons = () => {
    const Navigate=useNavigate();
  const handleBackward = () => {
   Navigate(-1);
  };

  const handleForward = () => {
    Navigate(1);
  };

  return (
    <div className="nav-buttons">
      <button className="nav-btn left" onClick={handleBackward}>⬅</button>
      <button className="nav-btn right" onClick={handleForward}>➡</button>
    </div>
  );
};

export default NavigationButtons;
