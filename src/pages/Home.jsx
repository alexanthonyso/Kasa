import React from 'react';
import Locations from '../components/Locations';
import Header from '../components/Header';

import home from "../assets/img/home.jpg"
import "../styles/pages/home_.css"



const Home = () => {
    return (
        <div>
            <Header />
                 <div className='banner'>
                    <h1>Chez vous, partout et ailleurs</h1>
                    <img src={home} alt="Paysage de rochers avec des arbres à côté de la mer" />
                </div>
        </div>
    );
};

export default Home;



  