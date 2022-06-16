import React from 'react';
import PropTypes from 'prop-types';
import './rockets.css';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../Redux/Rockets/Rockets';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDescription, rocketImage, rocketReserved,
  } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleReserve({ id: rocketId }));
  };

  return (
    <div className="rocket-container" key={rocketId}>
      <div>
        <img src={rocketImage} alt="/" />
      </div>
      <div className="right">
        <h2>
          {rocketName}
        </h2>
        <p>
          {
            rocketReserved
              ? (
                <span className="badge">Reserved</span>
              ) : null
}
          {rocketDescription}
        </p>
        <div>
          {rocketReserved ? (<button type="button" onClick={handleClick} className="btn cancel">Cancel Reservation</button>) : (<button type="button" className="btn" onClick={handleClick}>Reserve Rocket</button>)}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketReserved: PropTypes.bool.isRequired,
};

export default Rocket;
