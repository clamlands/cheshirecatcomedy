import React from "react";
import fb from "../images/socials/facebook.webp";
import insta from "../images/socials/instagram.webp";
import twitter from "../images/socials/twitter.webp";
import eventbrite from "../images/socials/eventbrite.webp";

export default function Footer() {
  return (
    <footer>
      <div className="socials-footer">
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
      <div>
        Website by{" "}
        <a
          href="https://www.instagram.com/noahmailloux/"
          className="insta-link"
          target="_blank"
          rel="noreferrer"
        >
          Noah Mailloux
        </a>
      </div>
    </footer>
  );
}
