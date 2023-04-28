import React from 'react'
import "../styles/components/_card.css"

const Card = ({location}) => {
    return (
        <article>
            <h2>{location.title}</h2>
            <img src={location.cover} alt="" />
        </article>
    );
};

export default Card;