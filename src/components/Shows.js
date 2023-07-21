import { React, useEffect } from "react";
import comedyplus from "../images/shows/750/comedyplus-750.webp";
import wwn from "../images/shows/750/wwn-750.webp";
import machine from "../images/shows/750/machine-750.webp";
import goodvibes from "../images/shows/750/goodvibes-750.webp";
import presents from "../images/shows/750/presents-750.webp";
import thirsty from "../images/shows/750/presents/thirsty-750.webp";
import scaries from "../images/shows/750/presents/scaries-750.webp";
import maga from "../images/shows/750/presents/maga-750.webp";
import queers from "../images/shows/750/presents/queers-750.webp";
import paddy from "../images/shows/750/presents/paddy-750.webp";
import foolin from "../images/shows/750/presents/foolin-750.webp";
import chastity from "../images/shows/750/presents/chastity-750.webp";
import storm from "../images/shows/750/presents/storm-750.webp";
import faceoff from "../images/shows/750/presents/faceoff-750.webp";

export default function Shows() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page shows">
      <a
        href="https://www.eventbrite.com/o/cheshire-cat-comedy-43584610473"
        target="_blank"
        rel="noreferrer"
        className="eventbrite-big desktop-hide"
      >
        TICKETS FOR ALL SHOWS
      </a>
      <div className="big-heading">MONTHLY SHOWS</div>
      <div className="side-cards">
        <div className="side-card">
          <img
            src={comedyplus}
            width="750"
            height="429"
            alt="Promo art for Comedy Plus"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <div className="card-heading">COMEDY PLUS</div>
            <div>
              <span className="gray">Second Friday of every month</span> |
              Crucible Madison
            </div>
            <p className="card-text">
              Half-naughty, half-funny, <b>COMEDY PLUS </b>highlights
              multitalented performers in its special blend of stand-up and
              burlesque. Featured comics, dancers, and drag artists have
              showcased their wide-ranging chops with rap, harmonica, ukulele,
              fire performance, bellydancing, live loop mixing, and state
              championship-winning yo-yo tricks.
            </p>
          </div>
        </div>
        <div className="side-card">
          <img
            src={wwn}
            width="750"
            height="429"
            alt="Promo art for Words with Nerds"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <div className="card-heading">WORDS WITH NERDS</div>
            <div>
              <span className="gray">Third Thursday of the every month</span> |
              Crucible Madison
            </div>
            <div>
              <p className="card-text">
                <b>Words with Nerds</b> mixes TED Talks with stand-up by
                bringing together local specialists and comedians to present on
                a topic of their choice. Topics have included "A Dangerous
                Protein that Helps Us Think", "The Worst Baseball Player in
                Human History", and "An Oral History of Karens, and How Naruto
                Created the Modern World".
              </p>
            </div>
          </div>
        </div>
        <div className="side-card">
          <img
            src={goodvibes}
            width="750"
            height="429"
            alt="Promo art for Good Vibes"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <div className="card-heading">GOOD VIBES</div>
            <div>
              <span className="gray">Variable Fridays & Saturdays</span> |
              Robinia Courtyard
            </div>
            <p className="card-text">
              Featuring live jazz piano, <b>Good Vibes</b> is a late-night
              showcase that features comics from all across the Midwest telling
              jokes amid the immaculately good vibes of Robinia Courtyard.
              Headliners have included Rachel Mac (Comedy Central, Light's Out
              with David Spade, SyFy), Johnny Beehner (FOX, XM / Sirius Radio),
              and Antoine McNeail (founder of 1Motion Out Reach Enterprise).
            </p>
          </div>
        </div>
        <div className="side-card">
          <img
            src={machine}
            width="750"
            height="429"
            alt="Promo art for The Comedy Machine"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <div className="card-heading">THE COMEDY MACHINE</div>
            <div>
              <span className="gray">Variable dates</span> | Multiple venues
            </div>
            <p className="card-text">
              <b> The Comedy Machine</b> showcases both stand-up comics and
              improvisers. The improvisers sit with the audience and watch the
              comics do their best jokes. Then, they perform scenes based on
              that material. Stand-up goes in, improv comes out!
            </p>
          </div>
        </div>
        <a
          href="https://www.eventbrite.com/o/cheshire-cat-comedy-43584610473"
          target="_blank"
          rel="noreferrer"
          className="eventbrite-big mobile-hide"
        >
          TICKETS FOR ALL SHOWS
        </a>
      </div>

      <div className="divider"></div>
      <div className="presents">
        <div>
          <img
            src={presents}
            width="750"
            height="429"
            alt="Promo art for Cheshire Cat Comedy Presents"
            className="pic presents-main-pic"
            loading="lazy"
          />
          <div className="card-body presents-body">
            <div className="card-heading">CHESHIRE CAT COMEDY PRESENTS</div>
            <div className="presents-text">
              A series of shows for holidays and other special occasions
            </div>
          </div>
        </div>
        <div className="presents-cards">
          <img
            src={thirsty}
            width="750"
            height="750"
            alt="Promo art for Thirsty Thursday"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={queers}
            width="750"
            height="750"
            alt="Promo art for Beers with Queers"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={maga}
            width="750"
            height="750"
            alt="Promo art for Make America Gay Again"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={scaries}
            width="750"
            height="750"
            alt="Promo art for Sunday Scaries"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={storm}
            width="750"
            height="750"
            alt="Promo art for Storming the Stage"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={paddy}
            width="750"
            height="750"
            alt="Promo art for Kiss Me, I'm Funny"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={foolin}
            width="750"
            height="750"
            alt="Promo art for No Foolin'"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={chastity}
            width="750"
            height="750"
            alt="Promo art for Chastity Washington"
            className="presents-pic"
            loading="lazy"
          />

          <img
            src={faceoff}
            width="750"
            height="750"
            alt="Promo art for Stand-up Face-Off"
            className="presents-pic"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
