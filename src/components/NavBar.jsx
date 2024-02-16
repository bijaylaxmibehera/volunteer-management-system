import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    return (
        <div>
          <div>
            <NavLink to="/">Volunteer Management System</NavLink>
          </div>
          <nav>
            <NavLink to="/">Volunteers</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/event-summary">Event Summary</NavLink>
          </nav>
        </div>
    )
}