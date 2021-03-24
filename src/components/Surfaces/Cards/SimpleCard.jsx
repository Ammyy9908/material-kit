import React from "react";

function SimpleCard() {
  return (
    <div className="card">
      <div className="card__body">
        <p className="card__name">Simple Card</p>
        <h2 className="card__title">Card Title</h2>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="card__footer">
        <span className="more__link">Learn More</span>
      </div>
    </div>
  );
}

export default SimpleCard;
