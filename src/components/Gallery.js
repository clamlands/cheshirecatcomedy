import { React, useEffect } from "react";
import PhotoCredit from "./PhotoCredit";
//import Masonry from "./Masonry";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import g0 from "../images/gallery/g0.webp";
import g1 from "../images/gallery/g1.webp";
import g2 from "../images/gallery/g2.webp";
import g3 from "../images/gallery/g3.webp";
// G4 REMOVED - REDUNDANT WITH HOMEPAGE
import g5 from "../images/gallery/g5.webp";
import g6 from "../images/gallery/g6.webp";
import g7 from "../images/gallery/g7.webp";
// G8 REMOVED - TOO MANY OLIVIAS
import g9 from "../images/gallery/g9.webp";
import g10 from "../images/gallery/g10.webp";
// G11 REMOVED - CONNOR BUNNY
import g12 from "../images/gallery/g12.webp";
import g13 from "../images/gallery/g13.webp";
import g14 from "../images/gallery/g14.webp";
import g15 from "../images/gallery/g15.webp";
import g16 from "../images/gallery/g16.webp";
import g17 from "../images/gallery/g17.webp";
import g18 from "../images/gallery/g18.webp";
import g19 from "../images/gallery/g19.webp";
// G20 REMOVED - ARIS
import g21 from "../images/gallery/g21.webp";
import g22 from "../images/gallery/g22.webp";
import g23 from "../images/gallery/g23.webp";
import g24 from "../images/gallery/g24.webp";
import g25 from "../images/gallery/g25.webp";
// G20 REMOVED - DRAG PIC NOW ON SHOW PAGE
import g27 from "../images/gallery/g27.webp";
import g28 from "../images/gallery/g28.webp";
import g29 from "../images/gallery/g29.webp";
import g30 from "../images/gallery/g30.webp";
import g31 from "../images/gallery/g31.webp";
import g32 from "../images/gallery/g32.webp";
import g33 from "../images/gallery/g33.webp";
import g34 from "../images/gallery/g34.webp";
import t0 from "../images/gallery/tall/t0.webp";
import t1 from "../images/gallery/tall/t1.webp";
import t2 from "../images/gallery/tall/t2.webp";
import t3 from "../images/gallery/tall/t3.webp";
import t4 from "../images/gallery/tall/t4.webp";
import t5 from "../images/gallery/tall/t5.webp";
import t6 from "../images/gallery/tall/t6.webp";
import t7 from "../images/gallery/tall/t7.webp";
import t8 from "../images/gallery/tall/t8.webp";
import t9 from "../images/gallery/tall/t9.webp";
import t10 from "../images/gallery/tall/t10.webp";
import t11 from "../images/gallery/tall/t11.webp";

const diego = "Diego Avila";
const diegoLink = "https://www.instagram.com/trashpimp/";
const jason = "Jason Hillman";
const jasonLink = "https://www.instagram.com/lmnhill";
const vanessa = "Vanessa Tortolano";
const vanessaLink = "https://www.instagram.com/vanessapants/";
const erik = "Erik Schwerdtfeger";
const erikLink = "https://www.instagram.com/streetandsun/";
const dmnx = "DMNX";
const dmnxLink = "https://www.instagram.com/dmnx.photo/";

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery">
      <h1 className="gallery-header">Gallery</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 900: 2, 1100: 3 }}>
        <Masonry gutter="5px">
          <PhotoCredit
            image={t7}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g1}
            height="1195"
            width="1792"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>

          <PhotoCredit
            image={g32}
            height="1345"
            width="1792"
            name={diego}
            link={diegoLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g33}
            height="1345"
            width="1792"
            name={diego}
            link={diegoLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g0}
            height="1405"
            width="1792"
            name={jason}
            link={jasonLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t6}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g28}
            height="1182"
            width="1792"
            name={jason}
            link={jasonLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t1}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g5}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g18}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>

          <PhotoCredit
            image={t4}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g6}
            height="1195"
            width="1792"
            name={diego}
            link={diegoLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t8}
            height="1193"
            width="795"
            name={jason}
            link={jasonLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g7}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>

          <PhotoCredit
            image={g10}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g12}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g15}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g16}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g2}
            height="1052"
            width="1792"
            name={jason}
            link={jasonLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g17}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g22}
            height="1346"
            width="1792"
            name={diego}
            link={diegoLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t2}
            height="1193"
            width="795"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t9}
            height="994"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g19}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t11}
            height="1192"
            width="795"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g9}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t0}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>

          <PhotoCredit
            image={g21}
            height="1195"
            width="1792"
            name={diego}
            link={diegoLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t5}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t10}
            height="1192"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g25}
            height="1433"
            width="1792"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g23}
            height="1433"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g13}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g14}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g31}
            height="1195"
            width="1792"
            name={vanessa}
            link={vanessaLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g3}
            height="1195"
            width="1792"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g27}
            height="1278"
            width="1792"
            name={jason}
            link={jasonLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g29}
            height="1195"
            width="1792"
            name="Cheshire Cat Comedy"
            link=""
          ></PhotoCredit>
          <PhotoCredit
            image={g24}
            height="1195"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g34}
            height="1153"
            width="1792"
            name={erik}
            link={erikLink}
          ></PhotoCredit>
          <PhotoCredit
            image={t3}
            height="1193"
            width="795"
            name={dmnx}
            link={dmnxLink}
          ></PhotoCredit>
          <PhotoCredit
            image={g30}
            height="1195"
            width="1792"
            name="Cheshire Cat Comedy"
            link=""
          ></PhotoCredit>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
