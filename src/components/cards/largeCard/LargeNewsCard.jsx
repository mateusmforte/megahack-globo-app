import React from "react";
import "./LargeNewsCard.scss";
const LargeNewsCard = (props) => {
  return (
    <div className="largeCard">
      <header className="largeCard__header">
        <span className="largeCard__header__category">
          {props.data.category}
        </span>
        {props.data.exclusive && (
          <img src={require("./img/exclusive.svg")} alt="Conteúdo Exclusivo" />
        )}
        {props.data.origin && (
          <img src={props.data.origin} alt="Origem do conteúdo" />
        )}
      </header>
      <main className="largeCard__content">
        <h3
          className="largeCard__content__title"
          style={{ color: props.data.color }}
        >
          {props.data.title}
        </h3>
        <p className="largeCard__content__text">{props.data.text}</p>
      </main>
      <footer className="largeCard__footer">
        <span className="largeCard__footer__text">{props.data.footerText}</span>
        {props.interactive && (
          <div className="largeCard__footer__interactiveButtons">
            <img src={require("./img/like.svg")} alt="Curtir" />
            <img src={require("./img/share.svg")} alt="Compartilhar" />
          </div>
        )}
      </footer>
    </div>
  );
};

export default LargeNewsCard;
