import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addVolunteerAsync, updateVolunteerAsync } from "./volunteerSlice";

export const VolunteerForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const volunteer = location.state ? location.state : null;
  const [volunteerData, setVolunteerData] = useState({
    name: volunteer ? volunteer.name : "",
    contactInfo: volunteer ? volunteer.contactInfo : "",
    skills: volunteer ? volunteer.skills.join(",") : "",
    availability: volunteer ? volunteer.availability : "yes",
    areasOfInterest: volunteer ? volunteer.areasOfInterest.join(",") : "",
    assignedEvents: volunteer ? volunteer.assignedEvents.join(",") : "",
    volunteerHistory: volunteer ? volunteer.volunteerHistory.join(",") : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (volunteer) {
      dispatch(
        updateVolunteerAsync({
          id: volunteer._id,
          updatedVolunteer: volunteerData,
        })
      );
      navigate("/");
    } else {
      dispatch(addVolunteerAsync(volunteerData));
      navigate("/");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2  className="text-2xl font-semibold mb-4 text-center">Volunteer</h2>
        <form onSubmit={handleSubmit} className="*:mb-3">
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Name:{" "}
            </label>
            <input
              type="text"
              placeholder="Lily"
              required
              value={volunteerData.name}
              onChange={(e) =>
                setVolunteerData({ ...volunteerData, name: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Contact:{" "}
            </label>
            <input
              type="text"
              placeholder="123456785"
              maxLength={10}
              required
              value={volunteerData.contactInfo}
              onChange={(e) =>
                setVolunteerData({
                  ...volunteerData,
                  contactInfo: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Skills:{" "}
            </label>
            <input
              type="text"
              placeholder="skill1,skill2"
              required
              value={volunteerData.skills}
              onChange={(e) =>
                setVolunteerData({
                  ...volunteerData,
                  skills: e.target.value.replace(/ /g, "").split(","),
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Area of interest:{" "}
            </label>
            <input
              type="text"
              placeholder="interest1,interest2"
              required
              value={volunteerData.areasOfInterest}
              onChange={(e) =>
                setVolunteerData({
                  ...volunteerData,
                  areasOfInterest: e.target.value.replace(/ /g, "").split(","),
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Assigned event:{" "}
            </label>
            <input
              type="text"
              placeholder="assignment1,assignment2"
              required
              value={volunteerData.assignedEvents}
              onChange={(e) =>
                setVolunteerData({
                  ...volunteerData,
                  assignedEvents: e.target.value.replace(/ /g, "").split(","),
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Volunteer history:{" "}
            </label>
            <input
              type="text"
              placeholder="none"
              required
              value={volunteerData.volunteerHistory}
              onChange={(e) =>
                setVolunteerData({
                  ...volunteerData,
                  volunteerHistory: e.target.value.replace(/ /g, "").split(","),
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Available:{" "}
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="yes"
                checked={volunteerData.availability === "yes"}
                onChange={(e) =>
                  setVolunteerData({
                    ...volunteerData,
                    availability: e.target.value,
                  })
                }
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="availability"
                value="no"
                checked={volunteerData.availability === "no"}
                onChange={(e) =>
                  setVolunteerData({
                    ...volunteerData,
                    availability: e.target.value,
                  })
                }
              />
              No
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
            >
              {volunteer ? "update" : "add"} volunteer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
