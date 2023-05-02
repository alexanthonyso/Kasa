import React from "react";
import data from "../datas/logements.json";
import Header from "../components/Header";

const Article = () => {
  const querystring = window.location.pathname.split("_");

  const recoverID = querystring[0].split("/article/").join("");

  const getData = data.find((el) => el.id === recoverID);
//   console.log(getData);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Article;
