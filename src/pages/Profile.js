import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  // Fetch user data (for example, from an API or local storage)
  useEffect(() => {
    const fetchUserData = async () => {
      // Mock user data (replace with actual API call or local storage fetch)
      const fetchedUser = {
        name: "Jack Oluoch",
        email: "jackonyango54@gmail.com",
        phone: "0794536415",
      };
      setUser(fetchedUser);
      setEditedUser(fetchedUser); // Initialize with the fetched data
    };
    fetchUserData();
  }, []);

  // Inline styles
  const styles = {
    userProfile: {
      display: "flex",
      justifyContent: "center", // Centers content horizontally
      alignItems: "center", // Centers content vertically
      height: "100vh", // Full viewport height
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4", // Light background for the page
    },
    profileContainer: {
      maxWidth: "600px", // Limit the width of the profile section
      width: "100%",
      backgroundColor: "#fff", // White background for the profile box
      padding: "20px",
      borderRadius: "8px", // Rounded corners
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow
      textAlign: "left",
    },
    heading: {
      textAlign: "center",
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    profileDetails: {
      marginBottom: "20px",
    },
    profileEdit: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between", // Space out the buttons
    },
    inputField: {
      padding: "10px",
      margin: "5px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      fontSize: "1rem",
    },
    editBtn: {
      padding: "12px 24px",
      backgroundColor: "#004d26", // Green button for edit
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    cancelBtn: {
      padding: "12px 24px",
      backgroundColor: "#f44336", // Red button for cancel
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      marginLeft: "10px",
    },
    saveBtn: {
      padding: "12px 24px",
      backgroundColor: "#004d26", // Blue button for save
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    buttonHover: {
      backgroundColor: "#004d26", // Green hover effect for edit button
    },
    cancelBtnHover: {
      backgroundColor: "#e53935", // Red hover effect for cancel button
    },
    saveBtnHover: {
      backgroundColor: "#007bb5", // Blue hover effect for save button
    },
    textStrong: {
      fontWeight: "bold",
      color: "#333",
    },
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Save edited user data (mock save function)
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    // Here you would make an API call to save the updated data
    console.log("User data saved:", editedUser);
  };

  // Cancel edit and revert to original data
  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  return (
    <div style={styles.userProfile}>
      {user ? (
        <div style={styles.profileContainer}>
          <h1 style={styles.heading}>Profile</h1>
          <div style={styles.profileDetails}>
            <p>
              <span style={styles.textStrong}>Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                user.name
              )}
            </p>

            <p>
              <span style={styles.textStrong}>Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                user.email
              )}
            </p>

            <p>
              <span style={styles.textStrong}>Phone:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                user.phone
              )}
            </p>
          </div>

          <div style={styles.profileEdit}>
            {isEditing ? (
              <>
                <button
                  style={styles.saveBtn}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.saveBtnHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.saveBtn.backgroundColor)}
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  style={styles.cancelBtn}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = styles.cancelBtnHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = styles.cancelBtn.backgroundColor)}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                style={styles.editBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.editBtn.backgroundColor)}
                onClick={toggleEdit}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
