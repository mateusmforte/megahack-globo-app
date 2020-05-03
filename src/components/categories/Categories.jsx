import React from "react";
import "./Categories.scss";
import Flicking from "@egjs/react-flicking";
const Categories = () => {
  const categories = [
    {
      name: "ao vivo",
      icon: require("./utils/icons/live-icon.svg"),
      color: "#0669DE",
    },
    {
      name: "covid-19",
      icon: null,
      color: "#A80000",
    },
    {
      name: "palmeiras",
      icon: null,
      color: "#579A2B",
    },
    {
      name: "política",
      icon: null,
      color: "#C41A0B",
    },
    {
      name: "economia",
      icon: null,
      color: "#A80000",
    },
  ];

  return (
    <Flicking
      className="categories"
      inputType={["touch", "mouse"]}
      bound={true}
      gap={20}
      moveType={{ type: "snap" }}
      collectStatistics={false}
    >
      {categories.map((categorie, index) => (
        <div
          key={index}
          className="categorie"
          style={{ color: categorie.color }}
        >
          {categorie.icon && <img src={categorie.icon} alt="icone" />}
          {categorie.name}
        </div>
      ))}
    </Flicking>
  );
};

export default Categories;
