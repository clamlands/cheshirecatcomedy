import React from "react";
import comedyplus from "../images/shows/comedyplus.jpg";
import wwn from "../images/shows/wwn.jpg";
import machine from "../images/shows/machine.jpg";
import goodvibes from "../images/shows/goodvibes.jpg";

export default function Shows() {
  return (
    <div className="page">
      <div className="heading">Monthly Shows</div>
      <div className="card">
        <img src={comedyplus} alt="Promo art for Comedy Plus" className="pic" />
        <div className="card">
          <b>Comedy Plus</b>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="card">
        <img src={wwn} alt="Promo art for Words with Nerds" className="pic" />
        <div>
          <b>Words with Nerds</b>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="card">
        <img src={goodvibes} alt="Promo art for Good Vibes" className="pic" />
        <div>
          <b>Good Vibes</b>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src={machine}
          alt="Promo art for The Comedy Machine"
          className="pic"
        />
        <div>
          <b>The Comedy Machine</b>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
}
<b></b>;
