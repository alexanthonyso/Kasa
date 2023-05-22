import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import "../styles/pages/article.css";
import Tags from "../components/Tags";
import Stars from "../components/Stars";

const Article = () => {
  const querystring = window.location.pathname.split("_");

  const recoverID = querystring[0].split("/article/").join("");
  const recoverName = querystring.slice(1);
  const recoverNameArticle = recoverName.join("_");
  // console.log(recoverNameArticle);

  const [aData, setAData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = data.find((el) => el.id === recoverID);
    if (getData) {
      setAData(getData);
    } else {
      navigate("/error");
    }
  }, [data, recoverID, navigate]);

  useEffect(() => {
    if (aData.title) {
      const aDataName = aData.title.split(" ").join("_");
      const aDataNameWithoutAccents = aDataName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const urlData = aData.id + "_" + aDataNameWithoutAccents;
      const urlArticle = recoverID + "_" + recoverNameArticle;

      if (urlData !== urlArticle) {
        navigate("/error");
      }
    }
  }, [aData, navigate, recoverID, recoverNameArticle]);

  const tags = aData.tags;
  const host = aData.host;
  let lastName = host && host.name.split(" ").pop();
  let firstName = host && host.name.split(" ").shift();

  return (
    <div>
      <div className="content">
        <Header />
      </div>
      <main>
        <Slider pictures={aData && aData.pictures} />
        <section className="article_informations">
          <div>
            <h1>{aData.title}</h1>
            <p className="article__location">{aData.location}</p>
            <Tags tags={tags} />
          </div>
          <div className="article__info2">
            <Stars stars={aData.rating} />
            <figure className="namepicture">
              <figcaption>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </figcaption>
              <img
                src={host && host.picture}
                alt={host && "Photo de " + host.name}
              />
            </figure>
          </div>
        </section>

        <section className="article__details">
          <div className="Dropdownarticle">
            <Dropdown
              classDP="dropdownArticle__button"
              classP="dropdownArticle__p"
              title="Description"
              content={aData.description}
            />
          </div>

          <div className="Dropdownarticle">
            <div className="article__details__space"></div>
            <Dropdown
              classDP="dropdownArticle__button"
              classP="dropdownArticle__p"
              title="Équipements"
              content={aData.equipments}
            />
          </div>
        </section>
      </main>
      <div />
      <Footer />
    </div>
  );
};

export default Article;
