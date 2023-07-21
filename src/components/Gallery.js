import { React, useEffect } from "react";

const images = require.context("../images/gallery/850", true);
const imageList = images.keys().map((image) => images(image));

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <div className="big-heading">GALLERY</div>
      <div className="gallery-pics">
        {imageList.map((img, i) => {
          return (
            <img
              src={img}
              width="850"
              height="567"
              alt=""
              className="pic"
              loading="lazy"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
