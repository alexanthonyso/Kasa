import React from "react";
import "../styles/pages/home.css";


const Banner = ({Img,Title}) => {
  return (
    <div>
      <div className="banner">
        <div className="banner_title">
          <h1> {Title} </h1>
        </div>
        <img
          src={Img}
          alt="Paysage de rochers avec des arbres à côté de la mer"
        />

        </div>
      </div>
    
  );
};

export default Banner;
