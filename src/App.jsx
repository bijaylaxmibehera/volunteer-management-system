import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Routes,Route } from "react-router";
import { VolunteerView } from "./components/VolunteerView";
import { EventView } from "./components/EventView";
import { EventSummary } from "./components/EventSummary";
import { VolunteerForm } from "./features/volunteer/VolunteerForm";
import { VolunteerDetails } from "./features/volunteer/VolunteerDetails";

function App() {
  return (
    <div className="App">
      <div className="bg-fuchsia-700 text-white">
        <NavBar />
      </div>
      <div className="mx-auto px-4">
        <Routes>
          <Route path="/" element={<VolunteerView/>}/>
          <Route path="/events" element={<EventView/>}/>
          <Route path="/event-summary" element={<EventSummary/>}/>
          <Route path="/volunteer/add" element={<VolunteerForm/>}/>
          <Route path="/volunteer/edit/:id" element={<VolunteerForm/>}/>
          <Route path="/volunteer/:id" element={<VolunteerDetails/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
