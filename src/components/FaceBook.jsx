import React, { useState } from 'react';
import profiles from '../../src/data/berlin.json';
import './IdCard.css';

const Facebook = () => {
  const allProfiles = [...profiles];
  const countries = [...new Set(allProfiles.map((profile) => profile.country))];

  const initialState = {
    countrySelected: false,
  };

  const [state, setState] = useState(initialState);

  const createButtons = () => {
    return countries.map((country) => (
      <button
        key={country}
        style={{
          backgroundColor:
            state.countrySelected === country ? 'lightblue' : 'white',
        }}
        onClick={() => handleClick(country)}
      >
        {country}
      </button>
    ));
  };

  const listProfiles = () => {
    return allProfiles.map((profile) => (
      <div
        key={profile.lastName}
        style={{
          backgroundColor:
            state.countrySelected === profile.country ? 'lightblue' : 'white',
        }}
        className="id-Card"
      >
        <div>
          <img
            style={{ width: '200px', height: '200px' }}
            src={profile.img}
            alt="Profile pic"
          />
        </div>
        <div className="card-data">
          <ul>
            <span>First name:</span> {profile.firstName}
          </ul>
          <ul>
            <span>Last name:</span> {profile.lastName}
          </ul>
          <ul>
            <span>Country:</span> {profile.country}
          </ul>
          <ul>
            <span>Type:</span> {profile.isStudent ? 'Student' : 'Teacher'}
          </ul>
        </div>
      </div>
    ));
  };

  const handleClick = (country) => {
    setState(() => ({
      countrySelected: country,
    }));
  };

  return (
    <div>
      <div>{createButtons()}</div>
      {listProfiles()}
    </div>
  );
};

export default Facebook;
