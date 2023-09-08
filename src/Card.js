import React from 'react';
import './Card.css';
import foodList from './food';

const Card = (props) => {
  return (
    <div className="Card">
      <div className="menu">{props.Carddata.name}</div>
      <div className="menu">{props.Carddata.type}</div>
      <div className="menu">{props.Carddata.price}</div>
    </div>
  );
};

export default Card;
