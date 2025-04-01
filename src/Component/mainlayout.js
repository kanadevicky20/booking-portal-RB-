// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import BookingPage from "./bookingPage";
// import BookingSuccess from "./bookingSuccess";
// import BookingTable from "./bookingTable";
// import CardDetails from "./cardDetail";
// import ImageUploadSummary from "./imageSummary";
// import Login from "./login";
// import LoginOtp from "./loginOtp";
// import PaymentMethod from "./paymentMethod";
// import Profile from "./profile";


// function MainLayout() {
//     const location = useLocation();
//     const hideNavbarRoutes = ["/login", "/signup", "*"]; // Add all routes where Navbar should be hidden
  
//     return (
//       <>
//         {/* ✅ Conditionally render Navbar */}
//         {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
  
//         <Routes>
//           <Route path="*" element={<LoginOtp />} />
//           <Route path="/signup" element={<LoginOtp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/booking" element={<BookingPage />} />
//           <Route path="/imagesummary" element={<ImageUploadSummary />} />
//           <Route path="/paymethod" element={<PaymentMethod />} />
//           <Route path="/bookingdb" element={<BookingTable />} />
//           <Route path="/setting" element={<SettingsPage />} />
//           <Route path="/payment" element={<CardDetails />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/success" element={<BookingSuccess />} />
//         </Routes>
//       </>
//     );
//   }

//   export default MainLayout;