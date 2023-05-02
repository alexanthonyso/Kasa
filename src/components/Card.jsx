import React from "react";
import "../styles/components/_card.css";
import { Link } from "react-router-dom";

const Card = ({ location }) => {
  //recover name of location

  const urlName = location.title.split(" ").join("_");
  //delete accents

  const urlNameNoAccents = urlName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  //URL
  const url = `article/${location.id}_${urlNameNoAccents}`;

  return (
    <article>
      <Link to={url}>
        <h2>{location.title}</h2>
        <img src={location.cover} alt="" />
      </Link>
    </article>
  );
};

export default Card;
