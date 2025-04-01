import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Component/addCard.css';

 function AddCard() {

    const Navigate=useNavigate();

    function handleBooking() {
        Navigate('/success');
      }
      function handlePayment() {
        Navigate('/paymethod');
      }

  return (
    <div className="container">
       <div className="main-content">
      
          {/* Payment Options and Ad Slot Container */}
           <div className="payment-box">
              
            <div className="payment-container">
            <div className=""> <h2>Add Card</h2> 
            <button className='back-btn' onClick={handlePayment}>Back</button>
            <div className="card-form">
  <label>Credit / Debit Card Number</label>
  <div className="card-input">
  <input 
  type="text" 
  placeholder="XXXX XXXX XXXX XXXX" 
  maxLength="16" 
  pattern="\d{3}" 
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16);
  }}
  required
/>
    <span className="card-logo">💳</span>
  </div>

  <label>Name</label>
  <input type="text" placeholder="XXXXXXXX XXXXX" />

  <div className="card-details">
    <div>
      <label>Exp Date</label>
      <input 
  type="text" 
  placeholder="MM/YY" 
  maxLength="5"
  onInput={(e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length > 1) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4); // Add '/' after MM
    }
    e.target.value = value.slice(0, 5); // Restrict to MM/YY format
  }}
  pattern="(0[1-9]|1[0-2])\/[0-9]{2}" 
  required
/>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <label>CVV</label>
      <input 
  type="text" 
  placeholder="XXX" 
  maxLength="3" 
  pattern="\d{3}" 
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
  }}
  required
/>
    </div>
  </div>

  <button className="pay-button">Add</button>
</div>
         
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

              {/* <button className="button" onClick={handleBooking}>Proceed To Payment</button> */}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddCard;