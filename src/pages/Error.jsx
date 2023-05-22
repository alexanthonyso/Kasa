import React from 'react';
import "../styles/pages/error.css"
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Error = () => {
    return (
        <div>
            <div className='content'>
            <Header />
            <main className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backtoHome" to="/">
            Retourner sur la page d’accueil
            </Link>
            </main>
        </div>
        <Footer />
        </div>
    );
};

export default Error;