import { React, useEffect, useState } from "react";
import Upcoming from "./Upcoming";
import PhotoCredit from "./PhotoCredit";

import img0 from "../images/home/h0-950.webp";
import img1 from "../images/home/h1-950.webp";
import img2 from "../images/home/h2-950.webp";
import img3 from "../images/home/h3-950.webp";
import img4 from "../images/home/h4-950.webp";
import img5 from "../images/home/h5-950.webp";
import img6 from "../images/home/h6-950.webp";
import img7 from "../images/home/h7-950.webp";
import img8 from "../images/home/h8-950.webp";
import img9 from "../images/home/h9-950.webp";
import img10 from "../images/home/h10-950.webp";
import img11 from "../images/home/h11-950.webp";
import img12 from "../images/home/h12-950.webp";
import img13 from "../images/home/h13-950.webp";

import breese from "../images/venues/breese.webp";
import destmad from "../images/venues/destmad.webp";
import crucible from "../images/venues/crucible-text.webp";
import cabin from "../images/venues/cabin.webp";
import cardinal from "../images/venues/cardinal.webp";
import bestmad from "../images/venues/best.webp";
import wiscfest from "../images/venues/wiscfest.webp";
import lodge from "../images/venues/lodge.webp";

const diegoLink = "https://www.instagram.com/trashpimp/";
const jasonLink = "https://www.instagram.com/lmnhillstudios/";
const jason = "Jason Hillman";
const diego = "Diego Avila";
const erik = "Erik Schwerdtfeger";
const erikLink = "https://www.instagram.com/streetandsun/";
const dmnx = "DMNX";
const dmnxLink = "https://www.instagram.com/dmnx.photo/";

// Makes it so the homepage main pic changes after each mount
function shuffleImg() {
  const imgArray = [
    [img0, dmnx, dmnxLink],
    [img1, diego, diegoLink],
    [img2, erik, erikLink],
    [img3, diego, diegoLink],
    [img4, jason, jasonLink],
    [img5, jason, jasonLink],
    [img6, erik, erikLink],
    [img7, erik, erikLink],
    [img8, dmnx, dmnxLink],
    [img9, erik, erikLink],
    [img10, erik, erikLink],
    [img11, dmnx, dmnxLink],
    [img12, dmnx, dmnxLink],
    [img13, dmnx, dmnxLink],
  ];
  const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];
  return randomImg;
}

export default function Homepage({ events, setEvents }) {
  const [randomImg, setRandomImg] = useState(shuffleImg());
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page home">
      <div className="about">
        <PhotoCredit
          image={randomImg[0]}
          width="950"
          height="633"
          name={randomImg[1]}
          link={randomImg[2]}
          className="home-pic"
        />

        {/*
        <img
          src={randomImg[0]}
          width="950"
          height="633"
          alt="Cheshire Cat Comedy"
          className="home-pic"
          fetchpriority="high"
        />
  */}

        <div className="about-right">
          <div className="home-text">
            <p>
              <b>Cheshire Cat Comedy </b>
              brings award-winning live entertainment to venues across the
              Madison area and beyond.
            </p>
            <p>
              Our shows feature stand-up, infotainment, live music, burlesque,
              drag, and more.
            </p>
          </div>
          <div className="divider grid mobile-hide"></div>
          <div className="venues">
            <img
              src={bestmad}
              width="160"
              height="90"
              alt="Best of Madison"
              className="venue"
            />
            <img
              src={breese}
              width="95"
              height="95"
              alt="Breese Stevens Field"
              className="venue"
            />
            <img
              src={crucible}
              width="160"
              height="92"
              alt="Crucible"
              className="venue"
            />
            <img
              src={cardinal}
              width="160"
              height="86"
              alt="The Cardinal Bar"
              className="venue"
            />
            <img
              src={wiscfest}
              width="95"
              height="95"
              alt="Wisconsin Science Festival"
              className="venue"
            />
            <img
              src={destmad}
              width="160"
              height="41"
              alt="Destination Madison"
              className="venue"
            />
            <img
              src={cabin}
              width="160"
              height="26"
              alt="Comedy Cabin"
              className="venue"
            />
            <img
              src={lodge}
              width="160"
              height="110"
              alt="The Lincoln Lodge"
              className="venue"
            />
          </div>
        </div>
      </div>
      <div className="desktop-hide divider-mobile"></div>
      <section className="upcoming">
        <h1>Upcoming Shows</h1>
        <Upcoming events={events} setEvents={setEvents} />
      </section>
    </div>
  );
}
