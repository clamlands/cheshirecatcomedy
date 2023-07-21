import React from "react";

export default function ShowCard({ graphic, title, date, time, place, link }) {
  return (
    <div className="card">
      <img
        src={graphic}
        width="1600"
        height="901"
        alt={title}
        className="show-pic"
        loading="lazy"
      />
      <div className="card-body">
        <div className="heading">{title}</div>
        <div>
          <span className="gray">{date}</span> | {time}
        </div>
        <div>{place}</div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="to-eventbrite"
        >
          TICKETS
        </a>
      </div>
    </div>
  );
}
