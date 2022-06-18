import React, { useEffect, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import './profile.css';

function Profile(props) {
  const rockets = useSelector((state) => state.rocketReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.rocketReserved);

  const [profileMissions, setProfileMissions] = useState([]);

  useEffect(() => {
    setProfileMissions(props.selectedRockets.MissionsReducer.profileMissions);
  }, []);

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
          { profileMissions.map((mission) => (
            <p className="missionItem" key={mission.Missions[0]}>{mission.Missions[1].mission_name}</p>
          )) }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ selectedRockets: state });

export default connect(mapStateToProps)(Profile);
