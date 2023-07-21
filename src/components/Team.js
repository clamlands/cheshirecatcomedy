import { React, useEffect } from "react";
import sasha from "../images/team/750/sasha-750.webp";
import noah from "../images/team/750/noah-750.webp";
import josh from "../images/team/750/josh-750.webp";
import katie from "../images/team/750/katie-750.webp";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <div className="big-heading">OUR TEAM</div>
      <div className="team-cards">
        <div className="card">
          <div>
            <img
              src={sasha}
              width="750"
              height="750"
              alt="Sasha Rosser"
              className="show-pic photo"
            />
            <div className="credit">
              Photo by{" "}
              <a
                href="https://www.instagram.com/vanessapants/"
                target="_blank"
                rel="noreferrer"
                className="credit-link"
              >
                Vanessa Tortolano
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="card-heading">Sasha Rosser</div>
            <p>
              Sasha Rosser is the founder of Cheshire Cat Comedy. She produces
              COMEDY PLUS and Words with Nerds.
            </p>
            <div className="heading">Connect:</div>
            <div className="team-links">
              <a href="https://sasharosser.com/stand-up/">Personal website</a>
              <a href="https://www.instagram.com/sasha.rosser/">Instagram</a>
              <a href="https://www.youtube.com/@sasharosser">YouTube</a>
              <a href="https://twitter.com/sasha_rosser">Twitter</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src={noah}
              width="750"
              height="750"
              alt="Noah Mailloux"
              className="show-pic photo"
            />
            <div className="credit">
              Photo by{" "}
              <a
                href="https://www.instagram.com/imbrycepeterson/"
                target="_blank"
                rel="noreferrer"
                className="credit-link"
              >
                Bryce Peterson
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="card-heading">Noah Mailloux</div>
            <p>
              Noah Mailloux is a comedian and producer. He produces Good Vibes
              as well as other monthly showcases. He also made this website.
            </p>
            <div className="heading">Connect:</div>
            <div className="team-links">
              <a href="https://www.instagram.com/noahmailloux/">Instagram</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src={josh}
              width="750"
              height="750"
              alt="Josh Glen"
              className="show-pic photo"
            />
            <div className="credit">
              Photo by{" "}
              <a
                href="https://www.instagram.com/imbrycepeterson/"
                target="_blank"
                rel="noreferrer"
                className="credit-link"
              >
                Bryce Peterson
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="card-heading">Josh Glen</div>
            <p>Josh Glen is a comedian and produces Rush Hour.</p>
            <div className="heading">Connect:</div>
            <div className="team-links">
              {" "}
              <a href="https://www.instagram.com/joshua.r.glen/">Instagram</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <img
              src={katie}
              width="750"
              height="750"
              alt="Katie Yang"
              className="show-pic photo"
            />
            <div className="credit">
              Photo by{" "}
              <a
                href="https://www.instagram.com/noahmailloux/"
                target="_blank"
                rel="noreferrer"
                className="credit-link"
              >
                Noah Mailloux
              </a>
            </div>
          </div>
          <div className="card-body">
            <div className="card-heading">Katie Yang</div>
            <p>
              Katie Yang provides logistic and showrunning support and is one of
              the hosts of Words with Nerds.
            </p>
            <div className="heading">Connect:</div>
            <div className="team-links">
              <a href="https://www.instagram.com/katieyang99/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
