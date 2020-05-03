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

  // / tag="div"
  // viewportTag="div"
  // cameraTag="div"
  // classPrefix="eg-flick"
  // deceleration={0.0075}
  // horizontal={true}
  // panelEffect={(x) => 1 - Math.pow(1 - x, 3)}
  // defaultIndex={0}
  //  thresholdAngle={45}
  // bounce={10}
  // autoResize={true}
  // adaptive={true}
  // zIndex={2000}
  // hanger={"0"}
  // anchor={"0"}
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
    // <ul className="categories">
    //
    // </ul>
  );
};

export default Categories;
