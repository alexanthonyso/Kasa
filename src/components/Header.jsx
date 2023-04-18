import React from "react"
import {NavLink} from "react-router-dom"
import "../styles/components/header.css"
import Logo from "../assets/logo/Logo.svg"

const Header = () => {
    return (
        <header>
         <img className="logo" src={Logo} alt="Logo Kasa"/>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/apropos">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header