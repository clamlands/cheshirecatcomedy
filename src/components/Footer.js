import React from "react";
import fb from "../images/facebook.png";
import insta from "../images/instagram.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/CheshireCatComedyCo">
        <img src={fb} alt="" className="icon" />
      </a>
      <a href="https://www.instagram.com/cheshirecatcomedyco/">
        <img src={insta} alt="" className="icon" />
      </a>
      <div>Website by Noah Mailloux</div>
    </div>
  );
}
