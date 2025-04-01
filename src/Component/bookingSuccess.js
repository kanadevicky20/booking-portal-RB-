import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "../Component/bookingSuccess.css";
import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();
  const summaryRef = useRef(null); // Reference to capture summary

  function handleHome() {
    navigate('/bookingdb');
  }

  async function handleShare() {
    if (!navigator.canShare) {
      alert("Sharing not supported on this browser.");
      return;
    }

    try {
      // Capture the summary-box-payment1 as an image
      const canvas = await html2canvas(summaryRef.current);
      const image = canvas.toDataURL("image/png"); // Convert to base64

      // Convert base64 to Blob
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], "Booking_Receipt.png", { type: "image/png" });

      // Share via Web Share API
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Slot Booking Receipt",
          text: "Your slot booking receipt is attached.",
        });
      } else {
        alert("Sharing is not supported.");
      }
    } catch (error) {
      console.error("Error sharing receipt:", error);
    }
  }

  return (
    <div className="success-container">
      <div className="success-box">
        {/* Left Section - Success Message */}
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Slot Booking Successful</h2>
          <p>Transaction Number : XXXXXXXX</p>
          <button className="btn" onClick={handleShare}>Share Receipt</button>
          <button className="btn" onClick={handleHome}>Go To Home Page</button>
        </div>

        {/* Right Section - Booking Summary (Capture as Image) */}
        <div className="summary-box-payment1" ref={summaryRef}>
          <div className="summary-card">
            <h3>1 Ad Slot</h3>
            <p>Sun, 26 Jan, 2025</p>
            <p>09:00 PM - 10:00 PM</p>
            <p><strong>App Name:</strong> XYZ - Mumbai</p>
          </div>
          <hr />
          <p className="price">₹ XXX.XX</p>
          <p className="booking-fee">Booking Fee ▼</p>
          <p className="price">₹ XXX.XX</p>
          <hr />
          <p className="paid-text">Paid</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
