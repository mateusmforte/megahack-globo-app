import React from "react";
import "./SmallNewsCard.scss";
const SmallNewsCard = (props) => {
  return (
    <div
      className="smallCard"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.cardImage && (
        <img
          className="smallCard__image"
          src={props.cardImage}
          alt={props.cardText}
        />
      )}
      <p className="smallCard__text" style={{ color: props.cardTextColor }}>
        {props.cardText}
      </p>
    </div>
  );
};

export default SmallNewsCard;
