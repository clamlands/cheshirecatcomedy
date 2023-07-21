import { React, useEffect, useState } from "react";
import Upcoming from "./Upcoming";
/*
import wwnsmall from "../images/upcoming-shows/480/wwn-7-20-480.webp";
import wwn2 from "../images/upcoming-shows/480/wwn2-480.webp";
import vibes2 from "../images/upcoming-shows/480/vibes2-480.webp";
import sasha from "../images/upcoming-shows/480/sasha-480.webp";
import fowlersmall from "../images/upcoming-shows/480/fowler-480.webp";
import vibessmall from "../images/upcoming-shows/480/vibes-480.webp";
import rushsmall from "../images/upcoming-shows/480/rush-hour-480.webp";
import aaronsmall from "../images/upcoming-shows/480/aaron-480.webp";
import plus2small from "../images/upcoming-shows/480/plus-8-11-480.webp";
*/

import img1 from "../images/home/non-pro1-950.webp";
import img2 from "../images/home/non-pro2-950.webp";
import img3 from "../images/home/pro3-950.webp";
import img4 from "../images/home/non-pro5-950.webp";
import img5 from "../images/home/pro5-950.webp";
import img6 from "../images/home/pro6-950.webp";
import img7 from "../images/home/group1-950.webp";
import img8 from "../images/home/non-pro3-950.webp";
import img9 from "../images/home/group2-950.webp";
import img10 from "../images/home/non-pro4-950.webp";

import robinia from "../images/venues/robinia.webp";
import breese from "../images/venues/breese.webp";
import destmad from "../images/venues/destmad.webp";
import crucible from "../images/venues/crucible-text.webp";
import cabin from "../images/venues/cabin.webp";
import coda from "../images/venues/coda.webp";

// Makes it so the homepage main pic changes after each mount
function shuffleImg() {
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
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
        <img
          src={randomImg}
          width="950"
          height="633"
          alt="Cheshire Cat Comedy"
          className="home-pic"
          fetchpriority="high"
        />
        <div className="about-right">
          <div className="home-text">
            <p>
              <b>Cheshire Cat Comedy </b>
              brings live entertainment to venues across the Madison area and
              beyond.
            </p>
            <p>
              Our shows feature stand-up, funny educational lectures, live
              music, burlesque, drag, and more.
            </p>
          </div>
          <div className="divider grid"></div>
          <div className="partners red-heading">OUR PARTNERS:</div>
          <div className="venues">
            <img
              src={breese}
              width="95"
              height="95"
              alt="Breese"
              className="venue"
            />
            <img
              src={coda}
              width="160"
              height="56"
              alt="Cafe Coda"
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
              src={robinia}
              width="95"
              height="101"
              alt="Robinia"
              className="venue"
            />
            <img
              src={destmad}
              width="160"
              height="41"
              alt="Cheshire Cat Comedy"
              className="venue"
            />
            <img
              src={cabin}
              width="160"
              height="26"
              alt="Comedy Cabin"
              className="venue"
            />
          </div>
        </div>
      </div>
      <div className="big-heading">UPCOMING SHOWS</div>

      <Upcoming events={events} setEvents={setEvents} />
      {/* 
     <div className="card">
          <img
            src={wwnsmall}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">WORDS WITH NERDS</div>
            <div>
              <span className="gray">July 20, 2023</span> | Doors: 6:30pm Show:
              7:00pm
            </div>
            <div>Crucible Madison</div>
            <a
              href="https://www.eventbrite.com/e/660749488507"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={fowlersmall}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">TYLER FOWLER</div>
            <div>
              <span className="gray">July 21, 2023</span> | Doors: 7:30pm Show:
              8:00pm
            </div>
            <div>Forward Club at Breese Stevens Field</div>
            <a
              href="https://www.eventbrite.com/e/650937380227"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={vibessmall}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">GOOD VIBES</div>
            <div>
              <span className="gray">July 28, 2023</span> | Doors: 9:30pm Show:
              10:00pm
            </div>
            <div>Robinia Courtyard</div>
            <a
              href="https://www.eventbrite.com/e/670794463297"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={rushsmall}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">RUSH HOUR</div>
            <div>
              <span className="gray">August 5, 2023</span> | Doors: 7:30pm Show:
              8:00pm
            </div>
            <div>Cafe Coda</div>
            <a
              href="https://www.eventbrite.com/e/rush-hour-tickets-665809934437?aff=oddtdtcreator"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={plus2small}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">COMEDY PLUS</div>
            <div>
              <span className="gray">August 11, 2023</span> | Doors: 6:30pm
              Show: 7:00pm
            </div>
            <div>Crucible Madison</div>
            <a
              href="https://www.eventbrite.com/e/665410489687"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={wwn2}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">WORDS WITH NERDS</div>
            <div>
              <span className="gray">August 17, 2023</span> | Doors: 6:30pm
              Show: 7:00pm
            </div>
            <div>Crucible Madison</div>
            <a
              href="https://www.eventbrite.com/e/671085834797"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={aaronsmall}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">AARON CHASE</div>
            <div>
              <span className="gray">August 18, 2023</span> | Doors: 7:30pm
              Show: 8:00pm
            </div>
            <div>Forward Club at Breese Stevens Field</div>
            <a
              href="https://www.eventbrite.com/e/664967735397"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={vibes2}
            width="750"
            height="750"
            alt="Cheshire Cat Comedy"
            className="show-pic"
            loading="lazy"
          />
          <div className="card-body">
            <div className="heading">GOOD VIBES</div>
            <div>
              <span className="gray">August 18, 2023</span> | Doors: 9:30pm
              Show: 10:00pm
            </div>
            <div>Robinia Courtyard</div>
            <a
              href="https://www.eventbrite.com/e/676676155597"
              target="_blank"
              rel="noreferrer"
              className="to-eventbrite"
            >
              TICKETS
            </a>
          </div>
        </div>
        <Upcoming
          graphic={sasha}
          title="SASHA ROSSER ALBUM RECORDING"
          date="September 8, 2023"
          time="Two shows: 7:00PM & 8:30PM"
          place="Crucible Madison"
          link="https://www.eventbrite.com/e/dirty-nerd-sasha-rossers-live-comedy-album-recording-tickets-573307246407"
        />
   */}
    </div>
  );
}
