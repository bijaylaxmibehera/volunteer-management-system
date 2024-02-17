import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEventAsync } from "./eventSlice";

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const event = useSelector((state) =>
    state.events.events.find((event) => event._id === id)
  );

  const handleEventDelete = (id) => {
    dispatch(deleteEventAsync(id));
    navigate("/events");
  };
  return (
    <>
      {event ? (
        <>
          <div className="max-w-xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Event Details</h2>
            <p>
              <span>Name:</span> {event.eventName}
            </p>
            <p>
              <span>Date:</span> {event.eventDate}
            </p>
            <p>
              <span>Location:</span> {event.location}
            </p>
            <p>
              <span>Description:</span> {event.description}
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Roles:</h3>
              <ul>
                {event.roles.map((role, index) => (
                  <li key={index} className="mb-1">
                    {role.role} - Volunteers Required: {role.volunteersRequired}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Volunteers:</h3>
              <ul>
                {event.volunteers.map((volunteer, index) => (
                  <li key={index} className="mb-1">
                    {volunteer.name} - Role: {volunteer.role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link to={`/events/edit/${id}`} className="mr-4 text-blue-600" state={event}>
                Edit
              </Link>
              <button
                onClick={() => handleEventDelete(id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>No event found!!</p>
      )}
    </>
  );
};
