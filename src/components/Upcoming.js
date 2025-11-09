import { React, useEffect } from "react";
import ShowCard from "./ShowCard";

export default function Upcoming({ events, setEvents }) {
  useEffect(() => {
    async function getEvents() {
      console.log(process.env.REACT_APP_API_KEY);
      const response = await fetch(
        `https://www.eventbriteapi.com/v3/organizations/863190459903/events/?status=live&expand=venue`,
        // `https://www.eventbriteapi.com/v3/organizations/863190459903/events/?status=live&expand=venue&token=${process.env.REACT_APP_API_KEY}`
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      const eventsData = await response.json();
      setEvents(eventsData.events);
      console.log(eventsData);
    }
    if (events.length === 0) {
      getEvents();
    }
  }, []);
  function mapItems() {
    return events.map((item, i) => {
      const date = convertDate(item.start.local);
      if (item.venue.name === "Crucible") {
        item.venue.name = "Crucible Madison";
      }
      if (item.venue.name === "the Cardinal Bar") {
        item.venue.name = "The Cardinal Bar";
      }
      //makes sure the image exists before trying to grab it. Otherwise homepage goes to black screen
      let showImg;
      if (item.logo === null) {
        showImg = null;
      } else {
        showImg = item.logo.original.url;
      }
      return (
        <ShowCard
          key={i}
          //graphic={item.logo.original.url}
          graphic={showImg}
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

    return [`${month} ${day}, ${year}`, `${showTime}`];
  }
  return <div className="show-cards">{events.length ? mapItems() : ""}</div>;
}
