import React from "react";
import { Link } from "react-router-dom";

export const VolunteerList = ({ volunteers }) => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 my-5">
        <thead className="bg-gray-50">
          <tr className="*:px-6 *:py-3 *:text-left *:text-xs *:font-medium *:text-gray-500 *:uppercase ">
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
                <tr key={_id} className="*:px-6 *:py-4">
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
