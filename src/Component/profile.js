import { useState } from "react";
import "../Component/profile.css";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [profileName, setProfileName] = useState("Rushikesh Bavishkar");
  const [email, setEmail] = useState("baviskarrushikesh03@gmail.com");
  const [phone, setPhone] = useState("+91 7378727976");
  const [company, setCompany] = useState("Update soon...");
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };
  const handleCancelProfile = () => {
    setIsEditing(false);
  };
  

  // Define active navigation paths
  const profilePaths = ["/profile", ""];
  const billingPaths = ["/billing", ""];
  const faqPaths = ["/faq"];

  return (
    <div className="profile-container">
      <h1>Settings</h1>
      <p className="profile-subtitle">Manage your account settings and preferences</p>

      {/* Tabs Section */}
      <div className="profile-header">
        <nav className="profile-header-nav">
          <a
            onClick={() => navigate('/profile')}
            style={{
              color: profilePaths.includes(location.pathname) ? "white" : "white",
              fontWeight: profilePaths.includes(location.pathname) ? "bold" : "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = profilePaths.includes(location.pathname) ? "white" : "white")}
          >
            PROFILE
          </a>

          <a
            onClick={() => navigate('/billing')}
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
          </a>

          <a
            onClick={() => navigate('/faq')}
            style={{
              color: faqPaths.includes(location.pathname) ? "white" : "gray",
              fontWeight: faqPaths.includes(location.pathname) ? "bold" : "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "white")}
            onMouseLeave={(e) => (e.target.style.color = faqPaths.includes(location.pathname) ? "white" : "gray")}
          >
            FAQ
          </a>
        </nav>
      </div>

      <div className="profile-content">
        {/* Profile Picture Section */}
        <div className="profile-section">
          <div 
            className="profile-picture" 
            onClick={() => document.getElementById("fileInput").click()} 
            style={{ cursor: "pointer" }}
          >
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-img" />
            ) : (
              <div className="placeholder">Click To Upload Image</div>
            )}
            <input 
              type="file" 
              id="fileInput" 
              style={{ display: "none" }} 
              onChange={handleImageUpload} 
              accept="image/*" 
            />
          </div>

          <p>Profile Picture</p>
          <label className="upload-btn">
            Change Picture
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </label>
          {profileImage && (
            <button className="delete-btn" onClick={handleDeleteImage}>
              Delete Picture
            </button>
          )}
        </div>

        {/* Profile Information Form */}
        <div className="profile-info">
          <label>Profile Name</label>
          <input 
            type="text" 
            value={profileName} 
            onChange={(e) => setProfileName(e.target.value)} 
            readOnly={!isEditing} 
          />

          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            readOnly 
            className="bold-text" 
          />

          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            readOnly={!isEditing} 
            className="bold-text" 
          />

          <label>Company Name</label>
          <input 
            type="text" 
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
            readOnly={!isEditing} 
          />

{isEditing ? (
  <div className="profile-buttons">
    <button className="edit-profile-btn" onClick={handleSaveProfile}>
      SAVE PROFILE
    </button>
    <button className="edit-profile-btn" onClick={handleCancelProfile}>
      CANCEL
    </button>
  </div>
) : (
  <button className="edit-profile-btn" onClick={handleEditProfile}>
    EDIT PROFILE
  </button>
)}

        </div>
      </div>
    </div>
  );
};

export default Profile;
