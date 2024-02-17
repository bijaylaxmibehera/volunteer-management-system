import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addEventAsync, updateEventsAsync } from "./eventSlice";

export const EventForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const event = location.state ? location.state : null;
  const [eventData, setEventData] = useState({
    eventName: event ? event.eventName : "",
    eventDate: event ? event.eventDate : "",
    location: event ? event.location : "",
    description: event ? event.description : "",
    roles: event
      ? event.roles.map((role) => ({ ...role }))
      : [{ role: "", volunteersRequired: 0 }],
    volunteers: event
      ? event.volunteers.map((volunteer) => ({ ...volunteer }))
      : [{ name: "", role: "" }],
  });

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const updatedData = [...eventData[field]];
    updatedData[index][e.target.name] = value;
    setEventData({ ...eventData, [field]: updatedData });
  };

  const handleRoleChange = (e, index) => {
    handleChange(e, index, "roles");
  };

  const handleVolunteerChange = (e, index) => {
    handleChange(e, index, "volunteers");
  };

  const addRole = () => {
    setEventData({
      ...eventData,
      roles: [...eventData.roles, { role: "", volunteersRequired: 0 }],
    });
  };

  const addVolunteer = () => {
    setEventData({
      ...eventData,
      volunteers: [...eventData.volunteers, { name: "", role: "" }],
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (event) {
      dispatch(updateEventsAsync({ id: event._id, updatedEvent: eventData }));
      navigate("/events");
    } else {
      dispatch(addEventAsync(eventData));
      navigate("/events");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Event Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Event Name:
          </label>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={(e) =>
              setEventData({ ...eventData, eventName: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Event Date:
          </label>
          <input
            type="date"
            name="eventDate"
            value={eventData.eventDate}
            onChange={(e) =>
              setEventData({ ...eventData, eventDate: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Location:
          </label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={(e) =>
              setEventData({ ...eventData, location: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={(e) =>
              setEventData({ ...eventData, description: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 w-full"
          ></textarea>
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Roles:
          </label>
          {eventData.roles.map((role, index) => (
            <div
              key={index}
              className="*:border *:border-gray-300 *:rounded *:px-4 *:py-2 *:w-full *:mb-2"
            >
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={role.role}
                onChange={(e) => handleRoleChange(e, index)}
              />
              <input
                type="number"
                name="volunteersRequired"
                placeholder="Volunteers Required"
                value={role.volunteersRequired}
                onChange={(e) => handleRoleChange(e, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
          <button
            type="button"
            onClick={addRole}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Role
          </button>
          </div>
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Volunteers:
          </label>
          {eventData.volunteers.map((volunteer, index) => (
            <div
              key={index}
              className="*:border *:border-gray-300 *:rounded *:px-4 *:py-2 *:w-full *:mb-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={volunteer.name}
                onChange={(e) => handleVolunteerChange(e, index)}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={volunteer.role}
                onChange={(e) => handleVolunteerChange(e, index)}
              />
            </div>
          ))}
          <div className="flex justify-center">
          <button
            type="button"
            onClick={addVolunteer}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Volunteer
          </button>
          </div>
        </div>
        <div className="flex justify-center my-3">
        <button
          type="submit"
          className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
        >
          {event ? "Update" : "Add"} Event
        </button>
        </div>
      </form>
    </div>
  );
};
