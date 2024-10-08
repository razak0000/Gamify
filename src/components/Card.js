import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={imageUrl} alt={title} className="card-img" />
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onButtonClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
