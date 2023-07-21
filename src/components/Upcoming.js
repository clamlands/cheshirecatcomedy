import { React, useEffect } from "react";
import ShowCard from "./ShowCard";

export default function Upcoming({ events, setEvents }) {
  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://www.eventbriteapi.com/v3/organizations/863190459903/events/?status=live&expand=venue&token=WMWDOL2CBPKTYKXXCGQH"
      );
      const eventsData = await response.json();
      setEvents(eventsData.events);
    }
    if (events.length === 0) {
      getEvents();
    }
  }, []);
  function mapItems() {
    return events.map((item, i) => {
      const date = convertDate(item.start.local);
      return (
        <ShowCard
          key={i}
          graphic={item.logo.original.url}
          title={item.name.text
            .toUpperCase()
            .replace("CHESHIRE CAT COMEDY PRESENTS: ", "")}
          date={date[0]}
          time={date[1]}
          place={item.venue.name}
          link={item.url}
        />
      );
    });
  }

  function convertDate(date) {
    const newDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let showTime = newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    //convert date to milliseconds to subtract 30 minutes for door time
    let milliseconds = Date.parse(newDate);
    let doorTime = new Date(milliseconds - 1800000);
    doorTime = doorTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    //remove the space between "PM" and the time and make it lowercase
    doorTime = doorTime.replace(/\s/g, "");
    doorTime = doorTime.toLowerCase();
    showTime = showTime.replace(/\s/g, "");
    showTime = showTime.toLowerCase();

    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    return [`${month} ${day}, ${year}`, `Doors: ${doorTime} Show: ${showTime}`];
  }
  return <div className="show-cards">{events.length ? mapItems() : ""}</div>;
}
