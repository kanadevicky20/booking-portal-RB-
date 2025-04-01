import React, { useState } from "react";
import "../Component/paymentMethod.css"; // Using the same CSS as previous pages
import phonepe from '../Images/phonepe.png';
import bhimupi from '../Images/bhimupi.png';
import paytm from '../Images/paytm.png';
import googlepay from '../Images/googlepay.png';
import sbi from '../Images/sbi.png';
import hdfc from '../Images/hdfc.png';
import axis from '../Images/axis.png';
import { useLocation, useNavigate } from "react-router-dom";
import { uploadImage } from "../API Manager/bookingFunctions";

const PaymentMethod = () => {
  const location=useLocation();
  const data=location.state.data;
  console.log("data location.state:",location.state.data);
  
  const [selectedMethod, setSelectedMethod] = useState("card");
  const navigate = useNavigate();
    const [uploadImageData,setUploadImageData]=useState({image: data.image,bookingId:data?.ad_slot_booking_id,payment_status: "Pass",booking_status: "Booked",booking_amount:data.booking_amount,access_token:data.token})


  function handleBooking() {
    alert("You Want To Pay with " + selectedMethod);
    const res=uploadImage(uploadImageData);
    console.log("ImgURL-",uploadImageData)
    if(res){
      navigate('/success');
    }
  }
  function handleCard(){
    navigate('/newcard');
  }

  return (
    <div className="container">
      <div className="main-content">
        {/* Payment Section */}
          

          {/* Payment Options and Ad Slot Container */}
        <div className="payment-box">
              
          <div className="payment-container">
            <div className="">
      <h2>Select Payment Method</h2>
             
              {/* <label className="save-card">
                <input type="checkbox" /> Save Card
              </label> */}
      <div className="heading-container">
                        <span className="line"></span>
                        <h3>Pay using Credit / Debit Card</h3>
                        <span className="line"></span>
                      </div>
            <div className="payment-options">
              {/* <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={selectedMethod === "card"}
                  onChange={() => setSelectedMethod("card")}
                />
                Pay using Credit / Debit Card
              </label> */}

              {/* Clickable Saved Cards */}
              <div className="card-container">
                <div className={`card ${selectedMethod === "card1" ? "selected" : ""}`} onClick={() => setSelectedMethod("card1")}>
                  <p>Current Balance</p>
                  <p>₹ XXXXX.XX</p>
                  <p>XXXX XXXX XXXX 1234</p>
                  <span className="visa-logo">VISA</span>
                </div>
                <div className={`card ${selectedMethod === "card2" ? "selected" : ""}`} onClick={() => setSelectedMethod("card2")}>
                  <p>Current Balance</p>
                  <p>₹ XXXXX.XX</p>
                  <p>XXXX XXXX XXXX 5678</p>
                  <span className="visa-logo">VISA</span>
                </div>
                <div className="card add-card" onClick={handleCard}>+</div>
              </div>

              <div className="heading-container">
                        <span className="line"></span>
                        <h3>UPI</h3>
                        <span className="line"></span>
                      </div>
                                    <div className="netbanking-container">
                                      <img src={phonepe} alt="PhonePe" className={selectedMethod === "phonepe" ? "selected" : ""} onClick={() => setSelectedMethod("phonepe")} />
                                      <img src={googlepay} alt="Google Pay" className={selectedMethod === "googlepay" ? "selected" : ""} onClick={() => setSelectedMethod("googlepay")} />
                                      <img src={bhimupi} alt="BHIM UPI" className={selectedMethod === "bhimupi" ? "selected" : ""} onClick={() => setSelectedMethod("bhimupi")} />
                                      <img src={paytm} alt="Paytm" className={selectedMethod === "paytm" ? "selected" : ""} onClick={() => setSelectedMethod("paytm")} />
                                    </div>
                                    <div className="heading-container">
                        <span className="line"></span>
                        <h3>Net Banking</h3>
                        <span className="line"></span>
                      </div>

                                      <div className="netbanking-container">
                          <img src={sbi} alt="sbi" className={selectedMethod === "sbi" ? "selected" : ""} onClick={() => setSelectedMethod("sbi")} />
                          <img src={axis} alt="axis" className={selectedMethod === "axis" ? "selected" : ""} onClick={() => setSelectedMethod("axis")} />
                          <img src={hdfc} alt="hdfc" className={selectedMethod === "hdfc" ? "selected" : ""} onClick={() => setSelectedMethod("hdfc")} />
                          <div className="add-bank" onClick={() => alert("Add a new bank option clicked!")}>+</div>
                        </div>

            </div >
            </div>
            {/* Payment Options */}
            

            {/* Ad Slot Summary Inside Payment Box */}
            <div className="summary-box-payment">
                  <div className="summary-card ">
                    <h3>1 Ad Slot <span>₹ {data.booking_amount}.00</span></h3>
                    <p><strong>{data.slot_date}</strong></p>
                    <p>{data.start_time} - {data.end_time}</p>
                    <p><strong>App Name</strong></p>
                    <p>City - {data.city_name}</p>
                  </div>

             

                  <div className="summary-details">
                    <p>Sub-total <span>₹ {data.booking_amount}.00</span></p>
                    <p>Booking Fee <span>₹ 15.00</span></p>
                    <p className="total-amount">Total Amount <span>₹ {data.booking_amount+15}.00</span></p>
                  </div>

              <button className="button" onClick={handleBooking}>Proceed To Payment</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
