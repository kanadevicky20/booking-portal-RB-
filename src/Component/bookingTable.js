import React, { useEffect, useState } from "react";
import "../Component/bookingTable.css";
import DataTable from "react-data-table-component";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAdSlotBooking } from "../API Manager/bookingFunctions";
import { Token } from "@mui/icons-material";


const bookingsData = [
  { ad_slot_booking_id: 545, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:120,booking_status:"available"},
  { ad_slot_booking_id: 547, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:130,booking_status:"not available" },
  { ad_slot_booking_id: 546, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:160,booking_status:"available" },
  { ad_slot_booking_id: 548, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:108 ,booking_status:"available" },
  { ad_slot_booking_id: 549, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:200,booking_status:"available"  },
  { ad_slot_booking_id: 550, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1320 ,booking_status:"available" },
  { ad_slot_booking_id: 551, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1300 ,booking_status:"available" },
  { ad_slot_booking_id: 552, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1010,booking_status:"not available"  },
  { ad_slot_booking_id: 553, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1020 ,booking_status:"available" },
  { ad_slot_booking_id: 554, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1100 ,booking_status:"available"},
  { ad_slot_booking_id: 555, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:2100 ,booking_status:"available"},
  { ad_slot_booking_id: 556, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:3100 ,booking_status:"available"},
  { ad_slot_booking_id: 545, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:2100,booking_status:"available" },
  { ad_slot_booking_id: 546, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1030 ,booking_status:"available"},
  { ad_slot_booking_id: 547, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1300 ,booking_status:"available"},
  { ad_slot_booking_id: 548, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "11:00 pm", end_time: "12:00 am",booking_amount:1040 ,booking_status:"available"},
  { ad_slot_booking_id: 549, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:1600 ,booking_status:"available"},
  { ad_slot_booking_id: 550, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:500 ,booking_status:"available"},
  { ad_slot_booking_id: 551, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:600 ,booking_status:"available"},
  { ad_slot_booking_id: 552, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "12:00 am", end_time: "01:00 pm",booking_amount:700 ,booking_status:"available"},
  { ad_slot_booking_id: 553, ad_slot_id: 1, city_name: "Nashik", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:800 ,booking_status:"not available"},
  { ad_slot_booking_id: 554, ad_slot_id: 1, city_name: "Pune", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:900,booking_status:"not available" },
  { ad_slot_booking_id: 555, ad_slot_id: 1, city_name: "Mumbai", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:1000 ,booking_status:"available"},
  { ad_slot_booking_id: 556, ad_slot_id: 1, city_name: "Nagpur", slot_date: "26-Jan-2025", start_time: "01:00 pm", end_time: "02:00 pm",booking_amount:100 ,booking_status:"available"},

];

const BookingTable = () => {

  const location = useLocation();
  
  const Navigate = useNavigate();
  const token = location.state?.token;
  console.log("access_token:",location.state?.token);
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSlotId, setSelectedSlotId] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");
  const [adSlotBookingData,setAdSlotBookingData]=useState([]);
  const [bookingData,setBookingData]=useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await getAdSlotBooking(token);
  
      if (res) {
        setBookingData(res); // Ensure res is not null before setting state
        console.log("data:",res);
      } else {
        console.warn("No booking data received.");
      }
    };
  
    fetchData();
    setInterval(fetchData,3000);
  },[])
 
  
  const columns = [
    {
        name: 'Booking ID',
        selector: row => row.ad_slot_booking_id,
    },
    {
      name: 'Slot ID',
      selector: row => row.ad_slot_id,
  },
  {
    name: 'City Name',
    selector: row => row.city_name,
},{
  name: 'Slot Date',
  selector: row => row.slot_date,
},{
  name: 'Start Time',
  selector: row => row.start_time,
},{
  name: 'End Time',
  selector: row => row.end_time,
},
,{
  name: 'Amount',
  selector: row => row.booking_amount,
},
    {
    name: 'Book',
    cell: row => (
        <button 
            className={`book-button ${row.booking_status !== 'available' ? 'disabled-button' : ''}`} 
            onClick={() => handleClick(row)} 
            disabled={row.booking_status !== 'available'}
        >
            Book
        </button>
    ),
},
];
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
      minHeight: "500px",  // Minimum height of the table
    }
  },
};

function handleClick(row){
  console.log("location.state:",location.state);
  
  console.log("row data",row);
  console.log("token:",token);
  
  Navigate('/booking',{state:{data:row,token:token}});
 }

 const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
};

const filteredBookings = bookingData?.filter((booking) => {
  return (
    (selectedCity === "All" || booking.city_name === selectedCity) &&
    (selectedStatus === "All" || booking?.booking_status === selectedStatus) &&
    (selectedSlotId === "All" || booking.ad_slot_id === Number(selectedSlotId)) &&
    (selectedDate === "All" || formatDate(booking.slot_date) === selectedDate)
  );
});

  return (
    <>
     <div className="dashboard">
      <div className="content">
       
       <div className="booking-table">
       <DataTable
       columns={columns}
       data={filteredBookings}
       fixedHeader={true}
       pagination={true}
       paginationPerPage={10}
       paginationRowsPerPageOptions={[10]}
       customStyles={customStyles}
       striped={true}
       />
       </div>

        <div className="sidebar-dashboard">
        <h2 className="filter-title">Filters</h2>
  
            <div className="filter-group">
              <label>City</label>
              <select onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="All">All Cities</option>
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Status</label>
              <select onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="not available">Booked</option>
                <option value="available">Available</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Slot ID</label>
              <select onChange={(e) => setSelectedSlotId(e.target.value)}>
                <option value="1">1</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Date</label>
              <input type="date" onChange={(e) => setSelectedDate(e.target.value)}/>
            </div>

            {/* Pagination Moved Inside Filters */}
            {/* <div className="pagination">
              <button>Previous</button>
              <span>Page 1 of 2</span>
              <button>Next</button>
            </div> */}
          </div>


      </div>
    </div>
    </>
  );
};

export default BookingTable;
