import React from "react";
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

  const getData = data.find((el) => el.id === recoverID);
  // console.log(getData.pictures);

  const tags = getData.tags;
  const host = getData.host;
  let lastName = host && host.name.split(" ").pop();
  let firstName = host && host.name.split(" ").shift();

  return (
    <div>
      <div className="content">
        <Header />
      </div>
      <main>
        <Slider pictures={getData.pictures} />
        <section className="article_informations">
          <div>
            <h1>{getData.title}</h1>
            <p className="article__location">{getData.location}</p>
            <Tags tags={tags} />
          </div>
          <div className="article__info2">
            <Stars stars={getData.rating} />
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
                content={getData.description}
              />
            </div>

            <div className="Dropdownarticle">
              <div className="article__details__space"></div>
              <Dropdown
                classDP="dropdownArticle__button"
                classP="dropdownArticle__p"
                title="Équipements"
                content={getData.equipments}
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
