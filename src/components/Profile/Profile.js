import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="box rockets">
        <h2 className="profile-title">Rockets</h2>
        <div className="container">
          {/* THE CONTENTS WILL BE DISPLAYED HERE */}
        </div>
      </div>
      <div className="box missions">
        <h2 className="profile-title">Missions</h2>
        <div className="container">
          {/* THE CONTENTS WILL BE DISPLAYED HERE */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
