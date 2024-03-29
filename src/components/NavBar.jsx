import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    const getStyle=({isActive})=>({
        color:isActive?"#FFFF00":"",
        fontWeight:isActive?"500":"",
        fontSize:isActive?"18px":"",
        textDecoration:isActive?"underline":""
    })
    return (
        <div className="flex justify-evenly h-[10vh] items-center">
          <div className="w-[30%] pl-10 text-2xl">
            <NavLink to="/">Volunteer Management System</NavLink>
          </div>
          <nav className="flex justify-around w-[70%] text-lg">
            <NavLink to="/" style={getStyle}>Volunteers</NavLink>
            <NavLink to="/events" style={getStyle}>Events</NavLink>
            <NavLink to="https://github.com/bijaylaxmibehera/volunteer-management-system" style={getStyle} target="_blank">Git repo</NavLink>
            <NavLink to="https://replit.com/@Bijaylaxmi2117/volunteer-management-api?v=1" style={getStyle} target="_blank">API</NavLink>
          </nav>
        </div>
    )
}