import { React, useEffect } from "react";
import sasha from "../images/team/750/sasha-750.webp";
import noah from "../images/team/750/noah-750.webp";
import josh from "../images/team/750/josh2-750.webp";
import katie from "../images/team/750/katie-750.webp";
import cody from "../images/team/750/cody.webp";
import andrew from "../images/team/750/andrew-750.webp";
import PhotoCredit from "./PhotoCredit";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <h1>Our Team</h1>
      <div className="team-cards">
        <div className="card">
          <PhotoCredit
            image={sasha}
            width="750"
            height="750"
            name="Jason Hillman"
            link="https://www.instagram.com/lmnhillstudios/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Sasha Rosser</h2>
            <p>
              Sasha Rosser is the founder of Cheshire Cat Comedy. She produces
              Oh, My!, Make America Gay Again, and Words with Nerds.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              <a
                href="https://sasharosser.com/stand-up/"
                target="_blank"
                rel="noreferrer"
              >
                Personal website
              </a>
              <a
                href="https://www.instagram.com/sasha.rosser/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@sasharosser"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
              <a
                href="https://twitter.com/sasha_rosser"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <PhotoCredit
            image={noah}
            width="750"
            height="750"
            name="Jason Hillman"
            link="https://www.instagram.com/lmnhillstudios/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Noah Mailloux</h2>
            <p>
              Noah Mailloux is a comedian and the producer of Color Me Funny and
              THE SH!TSHOW. He also made this website.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              <a
                href="https://noahmailloux.com/"
                target="_blank"
                rel="noreferrer"
              >
                Personal website
              </a>
              <a
                href="https://www.instagram.com/noahmailloux/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <PhotoCredit
            image={josh}
            width="750"
            height="750"
            name="Bryce Peterson"
            link="https://www.instagram.com/imbrycepeterson/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Josh Glen</h2>
            <p>
              Josh Glen is a comedian and the producer of Kimchi Fried Comedy,
              The Birds & the BS, and various other showcases.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              {" "}
              <a
                href="https://www.instagram.com/josh.r.glen/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <PhotoCredit
            image={cody}
            width="638"
            height="638"
            name="DMNX"
            link="https://www.instagram.com/dmnx.photo/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Cody Lemke</h2>
            <p>
              Cody Lemke is the creator, producer, and host of Schlock and Awe.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              <a
                href="https://www.instagram.com/oogalord"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>  */}
        <div className="card">
          <PhotoCredit
            image={andrew}
            width="750"
            height="750"
            name="Jason Hillman"
            link="https://www.instagram.com/lmnhillstudios/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Andrew Rynning</h2>
            <p>
              Andrew Rynning is a comedian, improviser, and writer, and is the
              producer of Change My Mind.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              <a
                href="https://www.instagram.com/amrynning/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <PhotoCredit
            image={katie}
            width="750"
            height="750"
            name="Jason Hillman"
            link="https://www.instagram.com/lmnhillstudios/"
            className="team-pic"
          />
          <div className="card-body">
            <h2>Katie Ricks</h2>
            <p>
              Katie Ricks provides logistic and showrunning support and is one
              of the hosts of Words with Nerds.
            </p>
            <h3>Connect:</h3>
            <div className="team-links">
              <a
                href="https://www.instagram.com/katiericks99/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
