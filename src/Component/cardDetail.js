import React from "react";
import "../Component/login.css"; // Ensure this CSS file is properly styled



const CardDetails = () => {
  return (
    <>
    <div className="container">
      {/* Main Content */}
      <div className="main-content">
        {/* Card Details Form */}
        <div className="card-details-box">
          <h2>Add Card</h2>
          <hr />
          
          <label>Credit / Debit Card Number</label>
          <div className="card-input">
            <input type="text" placeholder="XXXX XXXX XXXX XXX" maxLength="19" />
            {/* <img src="/assets/mastercard.png" alt="Card Icon" className="card-icon" /> */}
          </div>

          <label>Name</label>
          <input type="text" placeholder="XXXXXX XXXXX" />

          <div className="card-row">
            <div>
              <label>Exp Date</label>
              <input type="text" placeholder="XX/XX/XXXX" />
            </div>
            <div>
              <label>CVV</label>
              <input type="password" placeholder="XXXX" maxLength="4" />
            </div>
          </div>

          <button className="pay-button">ADD</button>
        </div>

        {/* Ad Slot Summary Inside Payment Box */}
        <div className="summary-box-payment">
                  <div className="summary-card ">
                    <h3>1 Ad Slot <span>₹ XXX.XX</span></h3>
                    <p><strong>Sun, 26 Jan, 2025</strong></p>
                    <p>09:00 PM - 10:00 PM</p>
                    <p><strong>App Name</strong></p>
                    <p>XYZ - Mumbai</p>
                  </div>

             

                  <div className="summary-details">
                    <p>Sub-total <span>₹ XXX.XX</span></p>
                    <p>Booking Fee <span>₹ XXX.XX</span></p>
                    <p className="total-amount">Total Amount <span>₹ XXX.XX</span></p>
                  </div>

              <button className="button" >Proceed To Payment</button>
             
            </div>
      </div>
    </div>
    </>
  );
};

export default CardDetails;
