import React from 'react';
import './IdCard.css';


const IdCard = ({firstName, lastName, gender, height, birth, picture}) => {
  return (
    <div className="id-card">
      <div className="card-img">
        <img src={picture} alt="avatar" />
      </div>
      <div className="card-data">
        <ul>
          <li>
            <b>First Name:</b> {firstName}
          </li>
          <li>
            <b>Last Name:</b> {lastName}
          </li>
          <li>
            <b>Gender:</b> {gender}
          </li>
          <li>
            <b>Height:</b> {height}
          </li>
          <li>
            <b>Birth:</b> {birth.toString().slice(0, 15)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;