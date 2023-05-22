import React from "react";
import Locations from "../components/Locations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import home from "../assets/img/home.jpg";
import "../styles/pages/home_.css";
import "../styles/components/_footer.css";



const Home = () => {
  return (
    <div>
      <main>
        <div className="content">
          <Header />
          <div className="banner">
            <div className="banner_title">
              <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <img
              src={home}
              alt="Paysage de rochers avec des arbres à côté de la mer"
            />
          </div>
        </div>
        <Locations />
      </main>
      <div />
      <Footer />
    </div>
  );
};

export default Home;
