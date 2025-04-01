import React, { useState } from "react";
import "../Component/settingPage.css"; // Importing CSS file
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const [emailOption, setEmailOption] = useState("existing");
  const Navigate=useNavigate();
  function handleProfile(){
    Navigate('/profile');
  }
  function handleBilling(){
    Navigate('/billing');
  }

  const billingHistory = [
    { invoice: 1, date: "Jan 1, 2025", time: "10:00 AM", bookingId: "123456", slotDate: "Jan 2, 2025", slotTime: "10:00 AM - 12:00 PM", status: "PAID" },
    { invoice: 2, date: "Jan 3, 2025", time: "08:15 AM", bookingId: "654321", slotDate: "Jan 3, 2025", slotTime: "02:00 PM - 04:00 PM", status: "PAID" },
    { invoice: 3, date: "Jan 5, 2025", time: "06:30 PM", bookingId: "3043027", slotDate: "Jan 6, 2025", slotTime: "06:00 PM - 08:00 PM", status: "FAILED" },
  ];

  return (
    <div className="container">
      <p>Manage your account settings and preferences</p>
      {/* Navigation Tabs */}
      <div className="settings-tabs">
        <button onClick={handleProfile} className="active">PROFILE</button>
        <button onClick={handleBilling} className="active">Billings History</button>
        <button>FAQ</button>
        <button>HELP</button>
      </div>

      {/* Payment Method Section */}
      <div className="payment-section">
        <h3>Payment Method</h3>
        <p>Update your billing details and address</p>

        <div className="card-details">
          <div className="input-group">
            <label>Name on your card</label>
            <input type="text" placeholder="XXXXXXXXXXXX" />
          </div>
          <div className="input-group">
            <label>Expiry</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="input-group">
            <label>Card Number</label>
            <input type="text" placeholder="●●●● ●●●● ●●●● ●●●●" />
          </div>
          <div className="input-group">
            <label>CVV</label>
            <input type="password" placeholder="●●●" />
          </div>
        </div>

        {/* Contact Email */}
        <div className="email-section">
          <h4>Contact email</h4>
          <p>Where should invoices be sent?</p>
          <label>
            <input
              type="radio"
              value="existing"
              checked={emailOption === "existing"}
              onChange={() => setEmailOption("existing")}
            />
            Send to the existing email (xxxxxx@gmail.com)
          </label>
          <label>
            <input
              type="radio"
              value="new"
              checked={emailOption === "new"}
              onChange={() => setEmailOption("new")}
            />
            Add another email address
          </label>
        </div>
      </div>

      {/* Billing History Table */}
      <div className="billing-history">
        <h3>Billing History</h3>
        <p>See the transactions you made</p>

        <table>
          <thead>
            <tr>
              <th>INVOICE #</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>BOOKING ID</th>
              <th>SLOT DATE</th>
              <th>SLOT TIME</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item, index) => (
              <tr key={index}>
                <td>{item.invoice}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.bookingId}</td>
                <td>{item.slotDate}</td>
                <td>{item.slotTime}</td>
                <td className={item.status === "PAID" ? "paid" : "failed"}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettingsPage;
