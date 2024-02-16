import React from "react";
import { Link } from "react-router-dom";

export const VolunteerList = ({ volunteers }) => {
  return (
    <>
      <table className="table-auto border-collapse border border-gray-400 my-6 mx-auto">
        <thead>
          <tr className="*:border *:border-gray-400 *:px-4 *:py-2">
            <th>Name</th>
            <th>Contact</th>
            <th>Skills</th>
            <th>Areas of interest</th>
            <th>Assigned Events</th>
            <th>History</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => {
            const {
              _id,
              name,
              contactInfo,
              skills,
              availability,
              areasOfInterest,
              assignedEvents,
              volunteerHistory,
            } = volunteer;
            return (
              <>
                <tr key={_id} className="*:border *:border-gray-400 *:px-4 *:py-2 *:text-indigo-700">
                  <td>
                    <Link to={`/volunteer/${_id}`}>{name}</Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>{contactInfo}</Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>
                      {skills.join(",")}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>
                      {areasOfInterest.join(",")}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>
                      {assignedEvents.join(",")}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>
                      {volunteerHistory.join(",")}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/volunteer/${_id}`}>{availability}</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
