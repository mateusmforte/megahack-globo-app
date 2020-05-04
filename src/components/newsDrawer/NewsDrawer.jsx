import React, { useState, useEffect } from "react";
import "./NewsDrawer.scss";
const NewsDrawer = (props) => {
  const [selectedCategorie, setselectedCategorie] = useState("");

  useEffect(() => {
    setselectedCategorie(props.newsCategories[0].name);
  }, [props.newsCategories]);

  return (
    <div className="newsDrawer">
      <ul className="newsDrawer__categoriesList">
        {props.newsCategories.map((categorie, index) => (
          <li
            key={index}
            onClick={() => setselectedCategorie(categorie.name)}
            className={`newsDrawer__categoriesList__item ${
              selectedCategorie === categorie.name ? "active" : ""
            }`}
          >
            {categorie.name}
          </li>
        ))}
      </ul>
      {props.newsCategories.map((categorie) => {
        if (categorie.name === selectedCategorie) return categorie.content;
        return null;
      })}
    </div>
  );
};

export default NewsDrawer;
