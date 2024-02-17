import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../features/event/eventSlice";
import { EventList } from "../features/event/EventList";

export const EventView = () => {
  const dispatch=useDispatch();
  const events=useSelector((state)=>state.events.events);
  const status=useSelector((state)=>state.events.status);
  const error=useSelector((state)=>state.events.error);

  useEffect(()=>{
   if(status==="idle"){
    dispatch(fetchEvents());
   }
  },[dispatch,events,status])
  console.log(useSelector((state)=>state.events))
  return (
    <>
       {status === "loading" ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            <p className="text-center text-xl text-red-600">{error}</p>
          ) : (
            <EventList events={events}/>
          )}
        </div>
      )}
      <div className="flex justify-center my-5">
      <Link to={`/events/add`}>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded">Add Event</button>
      </Link>
      </div>
    </>
  );
};
