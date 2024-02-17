import React from "react";
import { Link } from "react-router-dom";


export const EventList=({events})=>{
    return (
        <div className="overflow-x-auto">
        <table  className="min-w-full divide-y divide-gray-200 my-5">
        <thead className="bg-gray-50">
          <tr className="*:px-6 *:py-3 *:text-left *:text-xs *:font-medium *:text-gray-500 *:uppercase ">
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Role</th>
            <th>Volunteer Required</th>
            <th>Volunteers</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id} className="*:px-6 *:py-4">
              <td> <Link to={`/events/${event._id}`}>{event.eventName}</Link></td>
              <td> <Link to={`/events/${event._id}`}>{event.eventDate}</Link></td>
              <td> <Link to={`/events/${event._id}`}>{event.location}</Link></td>
              <td> <Link to={`/events/${event._id}`}>{event.description}</Link></td>
              <td>
                {event.roles.map((role, index) => (
                  <div key={index}>
                    <p>{role.role}</p>
                  </div>
                ))}
              </td>
              <td>
                {event.roles.map((role, index) => (
                  <div key={index}>
                    <p>{role.volunteersRequired}</p>
                  </div>
                ))}
              </td>
              <td>
                {event.volunteers.map((volunteer, index) => (
                  <div key={index}>
                    <p>{volunteer.name} - {volunteer.role}</p>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}