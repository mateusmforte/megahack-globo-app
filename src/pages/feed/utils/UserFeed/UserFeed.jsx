import React from "react";
import Flicking from "@egjs/react-flicking";
import SmallNewsCard from "../../../../components/cards/smallCard/SmallNewsCard";
import LargeNewsCard from "../../../../components/cards/largeCard/LargeNewsCard";

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
  const news = [
    {
      category: "Coronavírus",
      origin: require("./img/g1.svg"),
      color: "#C41A0B",
      exclusive: true,
      title:
        "Novo balanço aponta que ações do governo custarão ao menos R$ 350 bilhões em 2020",
      text:
        "Tesouro diz que R$ 60 bilhões já foram gastos com medidas de enfrentamento à crise gerada pelo novo coronavírus. Estimativa é de que dívida pública suba para 90% do PIB.",
      footerText: "Há 9 horas - Em Economia",
      isInteractive: "true",
    },
  ];
  return (
    <div className="userFeed">
      <h3>Seus Destaques</h3>
      <Flicking className="userFeed__highlightnews" gap={10} bound={true}>
        {highlightNews.map((highlight, index) => (
          <SmallNewsCard
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
      <LargeNewsCard interactive={news[0].isInteractive} data={news[0]} />
    </div>
  );
};

export default UserFeed;
