import React from "react";
import data from "../datas/logements.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";


const Article = () => {
  const querystring = window.location.pathname.split("_");

  const recoverID = querystring[0].split("/article/").join("");

  const getData = data.find((el) => el.id === recoverID);
  // console.log(getData.pictures);










  

  return (
    <div>
      <div className="content">
        <Header />
      </div>
      <main>
        <Slider pictures={getData.pictures} />
        <section className="article_details">
          <div>
            <h1>test</h1>
          </div>
      <Dropdown />


        </section>
      </main>
      <div />
      <Footer />
    </div>
  );
};

export default Article;
