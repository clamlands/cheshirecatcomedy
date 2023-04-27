import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/logo.jpg";
import "./NavStyle.css";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu hidden");
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="logo" alt="Company logo" />
      </Link>
      <div className={menuClass}>
        <NavLink to="/cheshirecatcomedy" onClick={updateMenu}>
          HOME
        </NavLink>
        <NavLink to="/about" onClick={updateMenu}>
          ABOUT
        </NavLink>
        <NavLink to="/shows" onClick={updateMenu}>
          SHOWS
        </NavLink>
        <NavLink to="/gallery" onClick={updateMenu}>
          GALLERY
        </NavLink>
        <NavLink to="/contact" onClick={updateMenu}>
          CONTACT US
        </NavLink>
      </div>
      <div className="burger" onClick={updateMenu}>
        <div className={burgerClass} />
        <div className={burgerClass} />
        <div className={burgerClass} />
      </div>
    </div>
  );
}
