import React from "react";
import SimpleNewsList from "../../../lists/SimpleNewsList/SimpleNewsList";
import "./HomeNews.scss";

const HomeNews = () => {
  const news = [
    {
      color: "#3B9C00",
      content:
        "Nordeste é celeiro de nomes para a seleção; monte seu time ideal",
      image: require("../img/image1.png"),
    },
    {
      color: "#EC7D00",
      content: "Elenco de 'Zorra' faz paródia do hit de Anitta, 'Contatinho'",
      image: require("../img/image2.png"),
    },
  ];
  return (
    <div className="homeNews">
      <h3>Destaques</h3>
      <h1>Brasil tem quase 80 mil casos de Covid e mais de 5,5 mil óbitos</h1>
      <p>
        Ministro diz estar alerta para 2 onda de Covid: ‘Possibilidade é real’
      </p>
      <p>Veja 4 indicadores de mais casos de Covid do que o governo divulga</p>
      <p>Mortes em casa crescem 30% em SP durante pandemia de Covid</p>
      <SimpleNewsList data={news} divisor />
      <img
        className="homeNews__ads"
        alt="Propaganda"
        src={require("../img/ads.svg")}
      />
    </div>
  );
};

export default HomeNews;
