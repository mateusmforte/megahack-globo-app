import React from "react";
import "./SimpleNewsList.scss";
export default function SimpleNewsList(props) {
  const list = props.data.map((item, index) => (
    <div className="simpleList__item" key={index}>
      <div className="simpleList__item__content">
        {item.image && (
          <img
            className="simpleList__item__content__image"
            src={item.image}
            alt=""
          />
        )}
        <p style={{ color: item.color || null }}>{item.content || ""}</p>
      </div>
      {props.divisor && index !== props.data.length - 1 && <hr />}
    </div>
  ));

  return <div className="simpleList">{list}</div>;
}
