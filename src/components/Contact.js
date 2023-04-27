import React from "react";
import fb from "../images/facebook.png";
import insta from "../images/instagram.png";

export default function Contact() {
  return (
    <div className="page">
      <div className="heading">Contact Us</div>
      <div>Booking for: Comics, drag, burlesqe, scientists, etc</div>
      <div>Email: cheshirecatcomedyco@gmail.com</div>
      <div className="socials">
        <a href="https://www.facebook.com/CheshireCatComedyCo">
          <img src={fb} alt="" className="icon-big" />
        </a>
        <a href="https://www.instagram.com/cheshirecatcomedyco/">
          <img src={insta} alt="" className="icon-big" />
        </a>
      </div>
    </div>
  );
}
