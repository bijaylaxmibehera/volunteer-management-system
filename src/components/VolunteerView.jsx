import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteers } from "../features/volunteer/volunteerSlice";
import { VolunteerList } from "../features/volunteer/VolunteerList";

export const VolunteerView = () => {
  const dispatch = useDispatch();
  const volunteers = useSelector((state) => state.volunteers.volunteers);
  const status = useSelector((state) => state.volunteers.status);
  const error = useSelector((state) => state.volunteers.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVolunteers());
    }
  }, [dispatch, volunteers, status]);
  return (
    <>
      {status === "loading" ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            <p className="text-center text-xl text-red-600">{error}</p>
          ) : (
            <VolunteerList volunteers={volunteers} />
          )}
        </div>
      )}
      <div className="flex justify-center">
      <Link to={`/volunteer/add`}>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded">Add Volunteer</button>
      </Link>
      </div>
      
    </>
  );
};
