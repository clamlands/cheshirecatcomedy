import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import external from "../../images/external.webp";
import ccc from "../../images/ccc.webp";
import cat from "../../images/cat.webp";
import fb from "../../images/socials/facebook.webp";
import insta from "../../images/socials/instagram.webp";
import twitter from "../../images/socials/twitter.webp";
import eventbrite from "../../images/socials/eventbrite.webp";
import "./NavStyle.css";

export default function Nav() {
  const [burgerClass, setBurgerClass] = useState("burger-bar closed");
  const [menuClass, setMenuClass] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  function updateMenu() {
    if (!menuOpen) {
      setBurgerClass("burger-bar open");
      setMenuClass("menu open");
    } else {
      setBurgerClass("burger-bar closed");
      setMenuClass("menu");
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="header">
      <div className="header-left">
        <Link to="/" className="logo-container">
          <img
            src={cat}
            width="50"
            height="50"
            alt="Cheshire Cat Comedy"
            className="cat"
          />
          <img
            src={ccc}
            width="700"
            height="94"
            alt="Cheshire Cat Comedy"
            className="nav-pic"
          />
        </Link>
        <div
          className="burger"
          onClick={() => {
            updateMenu();
          }}
        >
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
        <div className={menuClass}>
          <NavLink
            to="/"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            HOME
          </NavLink>
          <NavLink
            to="/shows"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            SHOWS
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/team"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            OUR TEAM
          </NavLink>
          <NavLink
            to="/press"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            PRESS
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => {
              updateMenu();
            }}
            className="nav-link"
          >
            CONTACT US
          </NavLink>
          <a
            href="https://www.eventbrite.com/o/cheshire-cat-comedy-43584610473"
            target="_blank"
            rel="noreferrer"
            className="ext-link nav-link"
          >
            TICKETS
            <img
              src={external}
              width="24"
              height="24"
              alt=""
              className="link-symbol"
            />
          </a>
        </div>
      </div>

      <div className="socials-header">
        <a
          href="https://www.facebook.com/CheshireCatComedyCo"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={fb}
            width="100"
            height="100"
            alt="Facebook"
            className="icon"
          />
        </a>
        <a
          href="https://www.instagram.com/cheshirecatcomedyco/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={insta}
            width="100"
            height="100"
            alt="Instagram"
            className="icon"
          />
        </a>
        <a
          href="https://www.eventbrite.com/o/cheshire-cat-comedy-43584610473"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={eventbrite}
            width="100"
            height="100"
            alt="Eventbrite"
            className="icon"
          />
        </a>
      </div>
    </div>
  );
}
