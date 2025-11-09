import { React, useEffect } from "react";
import ohmy from "../images/shows/750/ohmy-750.webp";
import wwn from "../images/shows/750/wwn-750.webp";
import rushhour from "../images/shows/750/rushhour-750.webp";
import machine from "../images/shows/750/machine-750.webp";
import goodvibes from "../images/shows/750/goodvibes-750.webp";
import schlock from "../images/shows/750/schlock-750.webp";
import thirsty from "../images/shows/750/presents/thirsty-750.webp";
import scaries from "../images/shows/750/presents/scaries-750.webp";
import shitshow from "../images/shows/750/shitshow-750.webp";
import maga from "../images/shows/750/presents/maga-750.webp";
import mind from "../images/shows/750/mind-750.webp";
import queers from "../images/shows/750/presents/queers-750.webp";
import paddy from "../images/shows/750/presents/paddy-750.webp";
import foolin from "../images/shows/750/presents/foolin-750.webp";
import storm from "../images/shows/750/presents/storm-750.webp";
import faceoff from "../images/shows/750/presents/faceoff-750.webp";
import barbie from "../images/shows/750/presents/barbie-750.webp";
import batman from "../images/shows/750/presents/batman-750.webp";
import teacher from "../images/shows/750/presents/teacher-750.webp";
import thanksgiving from "../images/shows/750/presents/thanksgiving-750.webp";
import magashow from "../images/shows/750/maga-750.webp";
import kimchi from "../images/shows/750/kimchi-750.webp";
import color from "../images/shows/750/color-750.webp";
import asshole from "../images/shows/750/asshole-750.webp";
import birds from "../images/shows/750/presents/birds-750.webp";
import worstDate from "../images/shows/750/presents/date-750.webp";
import puns from "../images/shows/750/presents/puns-750.webp";
import sheLaughed from "../images/shows/750/presents/shelaughed-750.webp";

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
      <h1>Recurring Shows</h1>
      <div className="side-cards">
        <div className="side-card">
          <img
            src={ohmy}
            width="750"
            height="500"
            alt="Promo art for Comedy Plus"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>OH, MY!</h2>
            <div>
              <span className="gray">Second Fridays</span> | Crucible Madison
            </div>
            <p className="card-text">
              Half-naughty, half-funny, <b>Oh, My! </b>highlights multitalented
              performers in its special blend of stand-up and burlesque.
              Featured comics, dancers, and drag artists have showcased their
              wide-ranging chops with rap, harmonica, ukulele, fire performance,
              bellydancing, live loop mixing, and state championship-winning
              yo-yo tricks. <b>Oh, My! </b> runs on the second Friday of each
              month at Crucible Madison.
            </p>
          </div>
        </div>
        <div className="side-card flip">
          <img
            src={wwn}
            width="750"
            height="500"
            alt="Promo art for Words with Nerds"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>WORDS WITH NERDS</h2>
            <div>
              <span className="gray">Third Thursdays</span> | Crucible Madison
            </div>
            <div>
              <p className="card-text">
                <b>Words with Nerds</b> mixes TED Talks with stand-up by
                bringing together local specialists and comedians to present on
                a topic of their choice. Come for the laughs and walk away with
                strange new knowledge - previous performers have regaled
                audiences with presentations about dinosaur rib anatomy, a
                principal component analysis of the Taco Bell Menu, nipple
                equality activism in Madison, how people misuse statistics, what
                can be learned from watching 100 Hallmark movies, how to perform
                self-surgery, and much, much more. Past presenters span local
                entrepreneurs, professors, researchers, activists, union
                organizers, surgeons, engineers, and stand-up comedians with an
                itch to nerd out on stage.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="side-card">
          <img
            src={goodvibes}
            width="750"
            height="500"
            alt="Promo art for Good Vibes"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>GOOD VIBES</h2>
            <div>
              <span className="gray">Variable Fridays & Saturdays</span> | The
              Cardinal Bar
            </div>
            <p className="card-text">
              <b>Good Vibes</b> is a late-night showcase of comics from all
              across the Midwest telling jokes amid the immaculately good vibes
              of The Cardinal Bar. Headliners have included Rachel Mac (Comedy
              Central, Light's Out with David Spade, SyFy), Johnny Beehner (FOX,
              XM / Sirius Radio), and Antoine McNeail (founder of 1Motion Out
              Reach Enterprise).
            </p>
          </div>
        </div> */}
        <div className="side-card">
          <img
            src={magashow}
            width="750"
            height="500"
            alt="Promo art for Good Vibes"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>MAKE AMERICA GAY AGAIN</h2>
            <div>
              <span className="gray">Variable Dates</span> | Crucible Madison
            </div>
            <p className="card-text">
              One of Cheshire Cat Comedy's most popular showcases,{" "}
              <b>MAKE AMERICA GAY AGAIN</b> brings together all-queer lineups of
              drag and stand-up peformers to — you guessed it — make America gay
              again.
            </p>
          </div>
        </div>
        <div className="side-card flip">
          <img
            src={shitshow}
            width="750"
            height="500"
            alt="Promo art for The Sh!tshow"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>THE SH!TSHOW</h2>
            <div>
              <span className="gray">Variable dates</span> | Forward Club
            </div>
            <p className="card-text">
              <b> THE SH!TSHOW</b> combines Hot Ones with stand-up at Forward
              Club, Breese Stevens Field's flamingo-themed soccer club bar
              space. Embrace the chaos as comedians struggle through their set
              after eating spicy hot peppers.
            </p>
          </div>
        </div>

        {/* <div className="side-card">
          <img
            src={schlock}
            width="750"
            height="500"
            alt="Schlock and Awe"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>SCHLOCK AND AWE</h2>
            <div>
              <span className="gray">Third Thursdays</span> | Crucible Madison
            </div>
            <p className="card-text">
              <b>Schlock and Awe</b> is a long-running Madison show where
              comedians make jokes during bad movies. Past showings have
              included The Adventures of Hercules II, Psycho Yoga Instructor,
              The Last Dragon, and My Santa.
            </p>
          </div>
        </div> */}
        <div className="side-card">
          <img
            src={kimchi}
            width="750"
            height="563"
            alt="Kimchi Fried Comedy"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>Kimchi Fried Comedy</h2>
            <div>
              <span className="gray">Variable dates</span> | Forward Club
            </div>
            <p className="card-text">
              Korean-American comedian and producer Josh Glen cooks up a custom
              cocktail of comics at Breese Stevens Field's flamingo-themed
              Forward Club bar space. Instead of the mustard, mayonnaise, and
              marmalade often found in stand-up comedy showcases,{" "}
              <b>Kimchi Fried Comedy</b> features hearty helpings of chocolate,
              chutney, and chorizo.
            </p>
          </div>
        </div>
        <div className="side-card flip">
          <img
            src={color}
            width="750"
            height="500"
            alt="Color Me Funny"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>COLOR ME FUNNY</h2>
            <div>
              <span className="gray">Variable dates</span> | Hotel Indigo
            </div>
            <p className="card-text">
              <b>Color Me Funny</b> is a stand-up comedy show that brings
              together a hilarious lineup of the Midwest's best comics at Hotel
              Indigo in downtown Madison, a former paint factory-turned historic
              hotel.
            </p>
          </div>
        </div>
        <div className="side-card">
          <img
            src={asshole}
            width="750"
            height="500"
            alt="Ask an Asshole"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>Ask an Asshole!</h2>
            <div>
              <span className="gray">Variable dates</span> | Variable locations
            </div>
            <p className="card-text">
              At <b>Ask an Asshole!</b> comedians riff over advice-seeking
              questions and weird prompts submitted before the show.
            </p>
          </div>
        </div>
        <div className="side-card flip">
          <img
            src={mind}
            width="750"
            height="500"
            alt="Change My Mind"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>Change My Mind</h2>
            <div>
              <span className="gray">Variable dates</span> | Madison's
            </div>
            <p className="card-text">
              <b>Change My Mind</b> is a comedy debate show where nothing makes
              sense and no one knows what they're talking about. Comedian
              debaters face off to present their cases, roast battle style, to a
              panel of comedian judges. Then the tables are flipped and the
              judges become the debaters!
            </p>
          </div>
        </div>
        {/* <div className="side-card">
          <img
            src={rushhour}
            width="750"
            height="423"
            alt="Promo art for Rush Hour"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>RUSH HOUR</h2>
            <div>
              <span className="gray">Variable dates</span> | Multiple venues
            </div>
            <div>
              <p className="card-text">
                Cheshire Cat Comedy presents <b>RUSH HOUR</b>, a comic showcase
                highlighting the best Black and Asian voices in the Midwest.{" "}
                <b>RUSH HOUR</b> has been headlined by heavy-hitters including
                Marz Timms (Netflix, Hulu, Mortal Kombat), Chastity Washington
                (BET, HBO, Just for Laughs), and Saku Yanagawa (NBC).
              </p>
            </div>
          </div>
        </div>

        <div className="side-card flip">
          <img
            src={machine}
            width="750"
            height="429"
            alt="Promo art for The Comedy Machine"
            className="side-card-pic"
          />
          <div className="side-card-body">
            <h2>THE COMEDY MACHINE</h2>
            <div>
              <span className="gray">Variable dates</span> | Multiple venues
            </div>
            <p className="card-text">
              <b> The Comedy Machine</b> showcases both stand-up comics and
              improvisers including cast members of Atlas Improv Co., Monkey
              Business Institue, and ComedySportz Milwaukee. The improvisers sit
              with the audience and watch the comics do their best jokes. Then,
              they perform scenes based on that material. Stand-up goes in,
              improv comes out!
            </p>
          </div>
        </div> */}
        <div className="divider desktop-hide"></div>
        <div className="center">
          In addition to our recurring showcases, Cheshire Cat Comedy also
          produces comedy events incorporating improv, sketch, panels,
          competitions, and more.
        </div>

        <div className="discount">
          <h2>SPECIAL DISCOUNTS FOR STUDENTS:</h2>
          <h3>$5 CASH COVER FOR ANY SHOW WITH A STUDENT ID</h3>
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

      {/* <div className="divider"></div> */}
      <div className="presents">
        <div>
          {/* <div className="card-body presents-body">
            <h2>CHESHIRE CAT COMEDY PRESENTS</h2>
            <div className="presents-text">
              A series of shows for holidays and other special occasions
            </div>
          </div> */}
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
          {/* <img
            src={maga}
            width="750"
            height="750"
            alt="Promo art for Make America Gay Again"
            className="presents-pic"
            loading="lazy"
          /> */}
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
            src={thanksgiving}
            width="750"
            height="750"
            alt="Promo art for Thanksgiving Hangover"
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
          <img
            src={barbie}
            width="750"
            height="750"
            alt="Promo art for Tickled Pink"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={batman}
            width="750"
            height="750"
            alt="Promo art for Roast of Batman"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={teacher}
            width="750"
            height="750"
            alt="Promo art for Teacher Comedy Tour"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={birds}
            width="750"
            height="750"
            alt="Promo art for Birds & the BS"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={worstDate}
            width="750"
            height="750"
            alt="Promo art for Best Date, Worst Date"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={puns}
            width="750"
            height="750"
            alt="Promo art for Pun-Demic"
            className="presents-pic"
            loading="lazy"
          />
          <img
            src={sheLaughed}
            width="750"
            height="750"
            alt="Promo art for Nevertheless, She Laughed"
            className="presents-pic"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
