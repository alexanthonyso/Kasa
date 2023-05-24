import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/components/header.css";
import Logo from "../assets/logo/Logo.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav>
        <NavLink to="/">
          {({ isActive }) => (isActive ? styles.active : styles.inactive)}
          Accueil
        </NavLink>
        <NavLink to="/apropos">
          {({ isActive }) => (isActive ? styles.active : styles.inactive)}A
          propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
