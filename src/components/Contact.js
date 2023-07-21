import { React, useEffect } from "react";
import fb from "../images/socials/facebook.webp";
import insta from "../images/socials/instagram.webp";
import twitter from "../images/socials/twitter.webp";
import eventbrite from "../images/socials/eventbrite.webp";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <div className="contact">
        <div className="contact-body">
          <div className="big-heading">CONTACT US</div>

          <div className="heading">Performers</div>
          <div>
            Are you looking to perform on a Cheshire Cat Comedy show? We book
            stand-up comedians, improvisers, drag and burlesque artists,
            reasearchers, and more! Connect with us on{" "}
            <a
              href="https://www.instagram.com/cheshirecatcomedyco/"
              className="insta-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            or send an email to <b>cheshirecatcomedyco@gmail.com</b>
          </div>
          <br />
          <div className="heading">Venues</div>
          <div>
            Are you a venue looking to put on a great show in your space?
          </div>
          <div>
            Send an email to <b>cheshirecatcomedyco@gmail.com</b>
          </div>
        </div>
        <div className="big-heading">Follow us on:</div>
        <div className="socials">
          <a
            href="https://www.facebook.com/CheshireCatComedyCo"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={fb}
              width="100"
              height="100"
              alt=""
              className="icon-big"
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
              alt=""
              className="icon-big"
            />
          </a>
          <a
            href="https://twitter.com/ccatcomedyco?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={twitter}
              width="100"
              height="100"
              alt=""
              className="icon-big"
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
              alt=""
              className="icon-big"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
