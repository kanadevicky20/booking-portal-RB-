import React, { useState } from "react";
import "../Component/billingHistory.css";
import { useLocation, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaDownload } from "react-icons/fa"; // Import download icon


const BillingHistory = () => {

  const token=sessionStorage.getItem("token");
  const Navigate = useNavigate();
  const location = useLocation();
  const [billingData,setBillingData]=useState([]);
  const obj = [
    { id: 1, time: "10:00am", status: "PAID", date: "26-Jan-2025",bookingid:"1234556", slotdate: "26-Jan-2025", slottime: "01:00 pm to 4:00 pm" },
    { id: 2, time: "10:00am", status: "FAILED", date: "26-Jan-2025",bookingid:"1234556", slotdate: "26-Jan-2025", slottime: "01:00 pm to 4:00 pm" },
    { id: 3, time: "12:00am", status: "PAID", date: "26-Jan-2025",bookingid:"1234556", slotdate: "26-Jan-2025", slottime: "01:00 pm to 4:00 pm" },
    { id: 4, time: "10:00am", status: "PAID", date: "26-Jan-2025",bookingid:"1234556", slotdate: "26-Jan-2025", slottime: "01:00 pm to 4:00 pm" }
  ]

  const columns = [
    {
        name: 'INVOICE',
        selector: row => row.id,
    },
    {
      name: 'DATE',
      selector: row => row.date,
  },
  {
    name: 'TIME',
    selector: row => row.time,
},{
  name: 'BOOKING ID',
  selector: row => row.bookingid,
},{
  name: 'SLOT DATE',
  selector: row => row.slotdate,
},{
  name: 'SLOT TIME',
  selector: row => row.slottime,
},{
  name: 'STATUS',
  selector: row => row.status,
},
{
  name: 'Download',
  cell: (row) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1px" }}>
    
      <FaDownload style={{ cursor: "pointer", color: "black" }} onClick={() => handleDownload(row)} />
    </div>
  ),
},];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#073C60", // Blue header background
      color: "white", // White text color
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center"

    }
  },
  table: {
    style: {
      width: "100%",  // Full width of the container
    }
  },
};

  function handleHome() {
    Navigate('/bookingdb');
  }
  function handleProfile() {
    Navigate('/profile');
  }

  function fetchImage(){
    const res=fetchImage(1,token);
    if(res){
          setBillingData(res.data);
    }
  }

  const handleDownload = (row) => {
    alert(`Downloading invoice for Booking ID: ${row.bookingid}`);
  };

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages (change as needed)

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const billingPaths = ["/billing", ""];

  return (
   <div className="container">
   <div className="billing-container">
        <h1>Settings</h1>
      {/* Tabs Section */}
      <div className="billing-header">
        <nav className="billing-header-nav">
        <a
            // onClick={() => navigate('/billing')}
            style={{
              color: billingPaths.includes(location.pathname) ? "white" : "gray",
              fontWeight: billingPaths.includes(location.pathname) ? "bold" : "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = billingPaths.includes(location.pathname) ? "white" : "gray")}
          >
            BILLING HISTORY
          </a>          <a onClick={handleProfile}>PROFILE</a>
          <a>FAQ</a>
          <a>HELP</a>
        </nav>
      </div>

      {/* Payment Method Section */}
      <h2 className="payment-title">Billing History</h2>
      <p className="payment-subtitle">Update your billing details and address</p>

      {/* Card Details */}
      <div className="card-details1">
        <h3>Card Details</h3>
        
      </div>
      <div className="card-inputs">
          <div>
            <label>Name on your card</label>
            <input type="text" placeholder="XXXXXXXX XXXXX" />
          </div>
          <div>
            <label>Expiry</label>
            <input type="text" placeholder="XX/XXXX" />
          </div>
          <div>
            <label>Card Number</label>
            <div className="card-number">
              <input type="text" placeholder="💳 XXXX XXXX XXXX XXXX" />
            </div>
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="XXXX" />
          </div>
        </div>

      {/* Contact Email */}
      <div className="contact-email">
        <h3>Contact email</h3>
        <p>Where should invoice be sent?</p>
        <div className="email-options">
          {/* <input type="radio" name="email" checked readOnly /> */}
          <span>Send to the existing email</span>
          <p className="email-text">[XXXXXXXXXXXX@gamil.com]</p>
          <button className="add-email">➕ Add another email address</button>
        </div>
       
      </div>

      {/* Billing History Table */}
      <div className="billing-history">
        <h3>Billing History
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            

        <label>Filter by- </label>
          <select className="filter-tag">
            <option>Date</option>
            <option>Amount</option>
            <option>Status</option>
          </select>
        </h3>
        {/* Filter Section */}
        <div className="filter-section">
        <p>See the transactions you made 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
        </p>
          
          <input className="input-tag" type="date" />
          <label>to </label>
          <input className="input-tag" type="date" />
        </div>



        <DataTable 
        data={obj} 
        columns={columns}
        dense
        customStyles={customStyles}
        />

        {/* Pagination Buttons at Bottom */}
        <div className="pagination-buttons">
          <p onClick={handlePrevious} disabled={currentPage === 1}>◀</p>
          <span> {currentPage} | {totalPages}</span>
          <p onClick={handleNext} disabled={currentPage === totalPages}>▶</p>
        </div>
        
      </div>
    </div>
   </div>
  );
};

export default BillingHistory;
