import React from "react";
import Locations from "../components/Locations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import home from "../assets/img/home.jpg";
import "../styles/pages/home.css";
import "../styles/components/_footer.css";
import Banner from "../components/Banner";


const Home = () => {
  return (
    <div>
      <main>
        <div className="content">
          <Header />
          <Banner
          Img={home}
          Title="Chez vous, partout et ailleurs"
          />
        </div>

        <Locations />
      </main>
      <div />
      <Footer />
    </div>
  );
};

export default Home;
