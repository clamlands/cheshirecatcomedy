import React from "react";
import img1 from "../images/gallery/group1.jpg";
import img2 from "../images/gallery/crowd1.jpg";
import img3 from "../images/gallery/crowd2.jpg";
import img4 from "../images/gallery/crowd3.jpg";
import img5 from "../images/gallery/crowd4.jpg";

export default function Gallery() {
  return (
    <div className="page">
      <div className="heading">GALLERY</div>
      <img src={img1} alt="" className="pic" />
      <img src={img2} alt="" className="pic" />
      <img src={img3} alt="" className="pic" />
      <img src={img4} alt="" className="pic" />
      <img src={img5} alt="" className="pic" />
    </div>
  );
}
