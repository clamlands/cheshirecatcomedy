import React from "react";

export default function ShowCard({ graphic, title, date, time, place, link }) {
  return (
    <div className="show-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={graphic}
          width="1600"
          height="901"
          alt={title}
          className="show-pic"
          loading="lazy"
        />
      </a>
      <div className="card-body">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          <h3>{title}</h3>
        </a>

        <div className="date">
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
