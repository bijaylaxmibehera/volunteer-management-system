import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteVolunteerAsync } from "./volunteerSlice";

export const VolunteerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const volunteer = useSelector((state) =>
    state.volunteers.volunteers.find((volunteer) => volunteer._id === id)
  );

  const handleDelete = (id) => {
    dispatch(deleteVolunteerAsync(id));
    navigate("/");
  };
  return (
    <>
      {volunteer ? (
        <>
          <h2 className="font-semibold text-2xl text-center my-4">
            Volunteer Details
          </h2>
          <div className="max-w-lg mx-auto my-8 p-8 bg-white shadow-md rounded-lg">
            <p>
              <span className="font-medium text-lg mr-2">Name:</span>
              {volunteer.name}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Contact:</span>
              {volunteer.contactInfo}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Skills:</span>
              {volunteer.skills.join(",")}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">
                Areas of interest:
              </span>
              {volunteer.areasOfInterest.join(",")}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Assigned Event:</span>
              {volunteer.assignedEvents.join(",")}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">
                Volunteer History:
              </span>
              {volunteer.volunteerHistory.join(",")}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Availability:</span>
              {volunteer.availability}
            </p>
            <div className="my-2">
              <Link to={`/volunteer/edit/${id}`} state={volunteer}>
                <button className="mr-4 text-blue-600">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Volunteer not found!!</p>
      )}
    </>
  );
};
