import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact";
import Shows from "./components/Shows";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Press from "./components/Press";
import ReactGA from "react-ga4";

export default function App() {
  ReactGA.initialize("G-L4XRQQ7MCE");
  ReactGA.send({ hitType: "pageview", page: "/", title: "Home" });
  ReactGA.send({ hitType: "pageview", page: "/shows", title: "Shows" });
  ReactGA.send({ hitType: "pageview", page: "/gallery", title: "Gallery" });
  ReactGA.send({ hitType: "pageview", page: "/team", title: "Team" });
  ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact" });

  const [events, setEvents] = useState([]);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Homepage events={events} setEvents={setEvents} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/press" element={<Press />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
