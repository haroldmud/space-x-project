import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function Profile() {
  const rockets = useSelector((state) => state.rocketReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.rocketReserved);

  return (
    <div className="profile-container">
      <div className="box rockets">
        <h2 className="profile-title">Rockets</h2>
        <div className="container">
          <ul className="reserve-rocket">
            {(reservedRockets.length === 0) ? (
              <li className="no-rockets-reserved">
                Looks Like You Have No Reserved Rockets
              </li>
            ) : (
              reservedRockets
                .map((rocket) => (
                  <li key={rocket.rocketId} className="reserved-item">
                    <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png" alt="reserved" />
                    <span className="rocket-name">{rocket.rocketName}</span>
                  </li>
                ))
            )}
          </ul>
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
