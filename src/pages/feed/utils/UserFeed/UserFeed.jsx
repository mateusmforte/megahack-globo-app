import React from "react";
import Flicking from "@egjs/react-flicking";
import SmallCard from "../../../../components/cards/smallCard/SmallCard";
import "./UserFeed.scss";
const UserFeed = () => {
  const highlightNews = [
    {
      title: "Presidente visita posto em Goiás e junta apoiadores",
      image: require("../UserFeed/img/noticia1.png"),
      color: "#a80000",
    },
    {
      title: "AM: rebelião sucede denúncia de 300 doentes",
      image: require("../UserFeed/img/noticia2.png"),
      color: "#a80000",
    },
    {
      title: "AM: rebelião sucede denúncia de 300 doentes",
      image: require("../UserFeed/img/noticia2.png"),
      color: "#a80000",
    },
  ];
  const userSubjects = [
    { title: "Notícias", image: require("./img/favoritos1.png") },
    { title: "Futebol", image: require("./img/favoritos2.png") },
    { title: "Novelas", image: require("./img/favoritos3.png") },
    { title: "Cinema", image: require("./img/favoritos3.png") },
  ];
  return (
    <div className="userFeed">
      <h3>Seus Destaques</h3>
      <Flicking className="userFeed__highlightnews" gap={10} bound={true}>
        {highlightNews.map((highlight, index) => (
          <SmallCard
            key={index}
            cardImage={highlight.image}
            cardText={highlight.title}
            cardTextColor={highlight.color}
          />
        ))}
      </Flicking>
      <h3>Assuntos Favoritos</h3>
      <Flicking className="userFeed__favsubjects" gap={5} bound={true}>
        {userSubjects.map((subject, index) => (
          <div
            className="userFeed__favsubjects__subject"
            style={{
              backgroundImage: `url(${subject.image})`,
            }}
          >
            <p>{subject.title}</p>
          </div>
        ))}
      </Flicking>
    </div>
  );
};

export default UserFeed;
// `rgba(${0}, ${45}, ${98}, ${0.75})`
