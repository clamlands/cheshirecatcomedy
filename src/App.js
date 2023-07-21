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

export default function App() {
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
